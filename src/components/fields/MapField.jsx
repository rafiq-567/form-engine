"use client";
import { useEffect, useState } from "react";

export default function MapField({ field }) {
  const [mounted, setMounted] = useState(false);
  const [MapComponents, setMapComponents] = useState(null);

  useEffect(() => {
    // Dynamically import to avoid SSR issues with leaflet
    Promise.all([
      import("react-leaflet"),
      import("leaflet"),
    ]).then(([reactLeaflet, L]) => {
      // Fix default marker icon broken in webpack
      delete L.default.Icon.Default.prototype._getIconUrl;
      L.default.Icon.Default.mergeOptions({
        iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
        iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
        shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
      });
      setMapComponents(reactLeaflet);
      setMounted(true);
    });
  }, []);

  const lat = field.lat ?? 23.8103;
  const lng = field.lng ?? 90.4125;
  const zoom = field.zoom ?? 13;

  if (!mounted || !MapComponents) {
    return (
      <div className="w-full h-48 bg-gray-100 rounded-lg flex items-center justify-center text-gray-400 text-sm">
        Loading map...
      </div>
    );
  }

  const { MapContainer, TileLayer, Marker, Popup } = MapComponents;

  return (
    <div>
      <label className="block mb-2 text-sm font-medium text-gray-700">
        {field.label || "Map"}
      </label>
      <div className="rounded-lg overflow-hidden border" style={{ height: "240px" }}>
        <MapContainer
          center={[lat, lng]}
          zoom={zoom}
          style={{ height: "100%", width: "100%" }}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[lat, lng]}>
            <Popup>{field.label || "Location"}</Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
}