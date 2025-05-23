import { Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

function DestinationLocation({destinationLocation}) {
  // define custom icon
  const customIcon = new L.Icon({
    iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
    shadowSize: [41, 41],
  });

  return (
    <Marker position={destinationLocation} icon={customIcon}>
      <Popup>
        <h2>Your destination!</h2>
      </Popup>
    </Marker>
  );
}

export default DestinationLocation;