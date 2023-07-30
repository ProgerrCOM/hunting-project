import { useState, useCallback, useEffect } from 'react';
import { GoogleMap, Marker, DirectionsRenderer } from '@react-google-maps/api';

const Map = () => {
    const [map, setMap] = useState(null);
    const [mapCenter, setMapCenter] = useState({ lat: 50.8128, lng: 28.2374 });
    const [currentLocation, setCurrentLocation] = useState(null);
    const destination = { lat: 50.8128, lng: 28.2374 };
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
        if (currentLocation) {
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
    }, [currentLocation, handleDirections]);

    const handleMapLoad = useCallback((mapInstance) => {
        setMap(mapInstance);
        if (currentLocation) {
            setMapCenter(currentLocation);
        }
    }, [currentLocation]);

    const getUserLocation = useCallback(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setCurrentLocation({
                        lat: position.coords.latitude,
                        lng: position.coords.longitude,
                    });
                },
                (error) => {
                    console.error('Error getting user location:', error);
                }
            );
        } else {
            console.error('Geolocation is not supported by this browser.');
        }
    }, []);

    useEffect(() => {
        getUserLocation();
    }, [getUserLocation]);

    useEffect(() => {
        if (map && currentLocation) {
            setMapCenter(currentLocation);
            calculateDirections();
        }
    }, [map, currentLocation, calculateDirections]);

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
                <Marker position={destination} label="B" />
                {directions && <DirectionsRenderer directions={directions} />}
            </GoogleMap>
        </div>
    );
};

export default Map;
