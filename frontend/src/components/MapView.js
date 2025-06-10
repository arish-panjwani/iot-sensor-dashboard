/** @format */

import React from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Polyline,
  Popup,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// ✅ Fix: Custom marker icon setup
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
});

function MapView({ gpsData }) {
  if (!gpsData || gpsData.length === 0) {
    return <p style={{ color: "white" }}>No GPS data available</p>;
  }

  const positions = gpsData.map((point) => [point.lat, point.lng]);
  const center = positions[positions.length - 1]; // last known position

  return (
    <div
      style={{
        height: "70vh",
        width: "80vw",
        marginVertical: "2rem",
      }}>
      <MapContainer
        center={center}
        zoom={16}
        style={{ height: "100%", width: "100%" }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {positions.map((pos, idx) => (
          <Marker key={idx} position={pos}>
            <Popup>
              {gpsData[idx].time
                ? new Date(gpsData[idx].time).toLocaleString()
                : "No timestamp"}
            </Popup>
          </Marker>
        ))}
        <Polyline positions={positions} />
      </MapContainer>
    </div>
  );
}

export default MapView;