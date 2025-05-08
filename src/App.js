import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./Map.css";
import L from "leaflet";

// Define custom icon
const customIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png", // Path to your icon
  iconSize: [25, 41], // Size of the icon [width, height]
  iconAnchor: [12, 41], // Point of the icon that corresponds to marker's location [x, y]
  popupAnchor: [1, -34], // Point where the popup opens relative to the iconAnchor [x, y]
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png", // Optional: shadow image
  shadowSize: [41, 41], // Size of the shadow
});

const position = [11.0667, 7.7];

function App() {
  return (
    <MapContainer
      center={position}
      zoom={13}
      scrollWheelZoom={false}
      className="map-container"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position} icon={customIcon}>
        <Popup>
          <h2>Your Location</h2>
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default App;
