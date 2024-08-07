"use client";
import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import "leaflet/dist/leaflet.css";

const Map = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const MapContainer = dynamic(
        () => import('react-leaflet').then((mod) => mod.MapContainer),
        { ssr: false }
    );

    const TileLayer = dynamic(
        () => import('react-leaflet').then((mod) => mod.TileLayer),
        { ssr: false }
    );

    if (!isMounted) {
        return null;
    }

    return (
        <MapContainer center={[13.716857941670275, -89.1536223598861]} zoom={13} scrollWheelZoom={false} style={{ height: '50vh', width: '100%' }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
        </MapContainer>
    );
};

export default Map;