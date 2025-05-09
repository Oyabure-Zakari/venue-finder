import { Marker, Popup } from "react-leaflet";
import L from "leaflet";
import { useState, useEffect } from "react";

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
  const [error, setError] = useState(null);
  const [position, setPosition] = useState(null); // store [lat, lng]

  useEffect(() => {
    // check if geolocation is supported
    if (!navigator.geolocation) {
      setError("Geolocation is not supported by your browser");
      return;
    }

    // watch for position updates (if user is moving)
    const watchId = navigator.geolocation.watchPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;
        setPosition([latitude, longitude]);
      },
      (err) => {
        setError(err.message);
      },
      {
        enableHighAccuracy: true,
        maximumAge: 30000,
        timeout: 27000,
      }
    );

    // stop watching position on component unmount
    return () => navigator.geolocation.clearWatch(watchId);
  }, []);

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
