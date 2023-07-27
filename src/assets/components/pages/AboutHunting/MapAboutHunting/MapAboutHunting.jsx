import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './mapAboutHunting.css';

const MapAboutHunting = () => {
    const mapRef = useRef(null);

    useEffect(() => {
        if (!mapRef.current) {
            const map = L.map('map').setView([50.8128, 28.2374], 10);

            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
            }).addTo(map);

            L.marker([50.8128, 28.2374]).addTo(map)
                .bindPopup('Сушки')
                .openPopup();

            mapRef.current = map;
        }
    }, []);

    return (
        <div className='mapAboutHunting'>
            <div id="map" className="mapAboutHunting__container _container"></div>
        </div>
    );
};

export default MapAboutHunting;
