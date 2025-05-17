import { Marker, Popup } from "react-leaflet";
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

function Destination({ coordinates }) {
  return (
    <Marker position={coordinates} icon={customIcon}>
      <Popup>
        <h2>Your Destination</h2>
        <p>
          {coordinates.lat}, {coordinates.lng}
        </p>
      </Popup>
    </Marker>
  );
}

export default Destination;
