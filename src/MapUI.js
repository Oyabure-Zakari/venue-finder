import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import "./Map.css";

import { useEffect } from "react";

import { coordinates } from "./coordinates";

import UserLocation from "./UserLocation";
import Destination from "./Destination";
import Routing from "./Routing";
import { useGeolocationStore } from "./store/useGeolocationStore";

function MapUI() {
  const error = useGeolocationStore((state) => state.error);
  const position = useGeolocationStore((state) => state.position);
  const initializeGeolocation = useGeolocationStore(
    (state) => state.initializeGeolocation
  );

  useEffect(() => {
    const cleanUp = initializeGeolocation();
    return cleanUp;
  }, [initializeGeolocation]);

  // render nothing if there's an error
  if (error) {
    return <div>Error: {error}</div>;
  }

  // render nothing if position is not yet available
  if (!position) {
    return null;
  }

  return (
    <MapContainer
      center={position}
      zoom={10}
      scrollWheelZoom={false}
      className="map-container"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <UserLocation />
      <Destination coordinates={coordinates} />
      <Routing coordinates={coordinates} />
    </MapContainer>
  );
}

export default MapUI;
