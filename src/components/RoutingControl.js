import { useEffect } from "react";
import { useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet-routing-machine";

const RoutingControl = ({ waypoints }) => {
  const map = useMap();

  useEffect(() => {
    if (!map) return;

    // Create the routing control
    const routingControl = L.Routing.control({
      waypoints: waypoints.map(([lat, lng]) => L.latLng(lat, lng)),
      lineOptions: {
        styles: [{ color: "#0078A8", weight: 4 }],
      },
      show: true,
      addWaypoints: false, // Prevent adding waypoints by clicking
      routeWhileDragging: true,
      fitSelectedRoutes: true,
      showAlternatives: false,
    }).addTo(map);

    // Log routing events for debugging
    routingControl.on("routesfound", (e) => {
      console.log("Routes found:", e.routes);
    });
    routingControl.on("routingerror", (e) => {
      console.error("Routing error:", e.error);
    });

    // Cleanup on unmount
    return () => {
      map.removeControl(routingControl);
    };
  }, [map, waypoints]);

  return null;
};

export default RoutingControl;
