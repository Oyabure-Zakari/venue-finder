import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./Map.css";

import UserLocation from "./UserLocation";

function MapUI() {
  return (
    <MapContainer
      center={[11.0667, 7.7]}
      zoom={13}
      scrollWheelZoom={false}
      className="map-container"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <UserLocation />
    </MapContainer>
  );
}

export default MapUI;
