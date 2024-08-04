import react from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'; //importar los componentes para el mapa
//import 'leaflet/dist/leaflet.css'; si se quieren agregar estilos
import L from 'leaflet'; //se importa la librería de leaflet

//se borra la función que obtiene la ruta de las imágenes de los marcadores
delete L.Icon.Default.prototype._getIconUrl;
//Se cambia la ruta de las imágenes de los marcadores
L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const Mapa = () => {
    //Coordenada de la biblioteca del campus de soya (mapa fijo)
    const position = [13.716857941670275, -89.1536223598861];

    return (
        <MapContainer
            center={position}
            zoom={16}
            style={{height: '400px', width: '100%'}} //tamaño del mapa
            //se deshabilita la interacción con el mapa
            dragging={false}
            touchZoom={false}
            zoomControl={false}
            scrollWheelZoom={false}
            doubleClickZoom={false}
            boxZoom={false}
            tap={false}
        >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
                <Popup>
                    Biblioteca
                </Popup>
            </Marker>
        </MapContainer>
    );
};

export default Mapa;