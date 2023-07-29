import { useState, useCallback, useEffect } from 'react';
import { GoogleMap, Marker, DirectionsRenderer } from '@react-google-maps/api';
import axios from 'axios';

// Сюда ключ

const Map = () => {
    const [map, setMap] = useState(null);
    const [mapCenter, setMapCenter] = useState({ lat: 50.8128, lng: 28.2374 });
    const [currentLocation, setCurrentLocation] = useState({ lat: 50.8128, lng: 28.2374 });
    const [destination, setDestination] = useState(null);
    const [destinationInput, setDestinationInput] = useState('');
    const [directions, setDirections] = useState(null);

    const handleMapClick = useCallback(({ lat, lng }) => {
        console.log('Latitude:', lat);
        console.log('Longitude:', lng);
        setCurrentLocation({ lat, lng });
    }, []);

    const handleDirections = useCallback((response) => {
        if (response !== null) {
            setDirections(response);
        }
    }, []);

    const calculateDirections = useCallback(() => {
        if (currentLocation && destination) {
            const directionsService = new window.google.maps.DirectionsService();
            directionsService.route(
                {
                    origin: currentLocation,
                    destination,
                    travelMode: window.google.maps.TravelMode.DRIVING,
                },
                handleDirections
            );
        }
    }, [currentLocation, destination, handleDirections]);

    const handleMapLoad = useCallback((mapInstance) => {
        setMap(mapInstance);
        setMapCenter(mapInstance.getCenter().toJSON());
    }, []);

    const getGeocodedLocation = useCallback(async () => {
        if (destinationInput) {
            try {
                const response = await axios.get(
                    `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
                        destinationInput
                    )}&key=${API_KEY}`
                );

                if (response.data.results && response.data.results.length > 0) {
                    const { lat, lng } = response.data.results[0].geometry.location;
                    setDestination({ lat, lng });
                } else {
                    console.error('No valid results found for the entered location.');
                }
            } catch (error) {
                console.error('Error occurred while geocoding:', error);
            }
        }
    }, [destinationInput]);

    useEffect(() => {
        if (map) {
            setMapCenter(map.getCenter().toJSON());
            setCurrentLocation(map.getCenter().toJSON());
        }
    }, [map]);

    useEffect(() => {
        getGeocodedLocation();
    }, [getGeocodedLocation]);

    useEffect(() => {
        calculateDirections();
    }, [calculateDirections]);

    return (
        <div style={{ height: '500px', width: '100%' }}>
            <GoogleMap
                center={mapCenter}
                zoom={13}
                onClick={(e) => handleMapClick(e.latLng.toJSON())}
                mapContainerStyle={{ height: '100%', width: '100%' }}
                onLoad={handleMapLoad}
            >
                {currentLocation && <Marker position={currentLocation} label="A" />}
                {destination && <Marker position={destination} label="B" />}
                {directions && <DirectionsRenderer directions={directions} />}
            </GoogleMap>
            <div>
                <input
                    type="text"
                    placeholder="Enter destination"
                    value={destinationInput}
                    onChange={(e) => setDestinationInput(e.target.value)}
                />
            </div>
        </div>
    );
};

export default Map;
