import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import "../src/styles/MapUI.css";

function MapUI() {
  return (
    <MapContainer
      center={[51.505, -0.09]}
      zoom={10}
      scrollWheelZoom={false}
      className="map-container"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </MapContainer>
  );
}

export default MapUI;
