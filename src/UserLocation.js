import { Marker, Popup } from "react-leaflet";
import L from "leaflet";
import { useGeolocationStore } from "./store/useGeolocationStore";

// Define custom icon
const customIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png", // Path to your icon
  iconSize: [25, 41], // Size of the icon [width, height]
  iconAnchor: [12, 41], // Point of the icon that corresponds to marker's location [x, y]
  popupAnchor: [1, -34], // Point where the popup opens relative to the iconAnchor [x, y]
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png", // Optional: shadow image
  shadowSize: [41, 41], // Size of the shadow
});

function UserLocation() {
  const error = useGeolocationStore((state) => state.error);
  const position = useGeolocationStore((state) => state.position);

  // render nothing if there's an error
  if (error) {
    return <div>Error: {error}</div>;
  }

  // render nothing if position is not yet available
  if (!position) {
    return null;
  }

  return (
    <Marker position={position} icon={customIcon}>
      <Popup>
        <h2>Your Location</h2>
        <p>{position.join(", ")}</p>
      </Popup>
    </Marker>
  );
}

export default UserLocation;
