import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import "../styles/map.css";
import L from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

import { useGeolocated } from "react-geolocated";

import UserLocation from "../components/UserLocation";
import DestinationLocation from "../components/DestinationLocation";
import RoutingControl from "../components/RoutingControl";

// Fix Leaflet marker icons
const DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});
L.Marker.prototype.options.icon = DefaultIcon;

function MapPage() {
  const {
    coords,
    isGeolocationAvailable,
    isGeolocationEnabled,
    positionError,
  } = useGeolocated({
    positionOptions: {
      enableHighAccuracy: true,
      maximumAge: 0,
      timeout: 5000,
    },
    watchPosition: true,
  });

  if (!isGeolocationAvailable)
    return <p>Your browser does not support geolocation.</p>;

  if (!isGeolocationEnabled)
    return <p>Location access is disabled or denied.</p>;

  if (!coords) return <p>Couldn't get your location.</p>;

  if (positionError) return <p>Error: {positionError.message}</p>;

  const userLocation = [coords.latitude, coords.longitude];
  const destinationLocation = [6.616865, 3.508072];

  console.log("isGeolocationAvailable:", isGeolocationAvailable);
  console.log("isGeolocationEnabled:", isGeolocationEnabled);
  console.log("Coords:", coords);
  console.log("PositionError:", positionError);

  return (
    <div>
      <MapContainer center={userLocation} zoom={10} className="map-container">
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <UserLocation userLocation={userLocation} />
        <DestinationLocation destinationLocation={destinationLocation} />
        <RoutingControl waypoints={[userLocation, destinationLocation]} />
      </MapContainer>
    </div>
  );
}

export default MapPage;
