import { useMap } from "react-leaflet";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import "leaflet-routing-machine";
import L from "leaflet";

import { useGeolocationStore } from "./store/useGeolocationStore";
import { useEffect } from "react";

function Routing({ coordinates }) {
  const map = useMap();
  const position = useGeolocationStore((state) => state.position);

  useEffect(() => {
    if (!map || !position || !coordinates) return;

    const routingControl = L.Routing.control({
      waypoints: [
        L.latLng(position[0], position[1]),
        L.latLng(coordinates.lat, coordinates.lng),
      ],
      routeWhileDragging: false,
      show: true,
      addWaypoints: false,
      fitSelectedRoutes: true,
      showAlternatives: false,
      lineOptions: {
        styles: [{ color: "#3388ff", weight: 4 }],
      },
    }).addTo(map);

    return () => {
      map.removeControl(routingControl);
    };
  }, [map, position, coordinates]);

  return null;
}

export default Routing;
