//Leaflet Map
import { MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import { Icon } from 'leaflet';
import mapCoordinatesInterface from '../interfaces/mapCoordinatesInterface';

const Map = ({ position } : { position: mapCoordinatesInterface}) => {
	return (
		<div>
			<MapContainer center={position} zoom={16} scrollWheelZoom={false} style={{ height: "500px", width: "100%" }}>
				<TileLayer
					attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				/>
				<Marker position={position} icon={new Icon({iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41]})}>
					<Popup>
						A pretty CSS3 popup. <br /> Easily customizable.
					</Popup>
				</Marker>
    </MapContainer>
		</div>
	)
}

export default Map
