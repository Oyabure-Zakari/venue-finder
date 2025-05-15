import { create } from "zustand";

export const useGeolocationStore = create((set) => ({
  error: null,
  position: null,

  initializeGeolocation: () => {
    // check if geolocation is supported
    if (!navigator.geolocation) {
      set({ error: "Geolocation is not supported by your browser" });
      return;
    }

    // watch for position updates (if user is moving)
    const watchId = navigator.geolocation.watchPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;
        set({ position: [latitude, longitude], error: null });
      },
      (err) => {
        set({ error: err.message });
      },
      {
        enableHighAccuracy: true,
        maximumAge: 0,
        timeout: 27000,
      }
    );

    // cleanup function to stop watching position on component unmount
    return () => navigator.geolocation.clearWatch(watchId);
  },
}));
