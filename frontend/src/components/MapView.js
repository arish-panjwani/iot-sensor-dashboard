/** @format */
 
import React, { useEffect } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Polyline,
  Popup,
  useMap,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
 
// Red & Grey custom markers
const redIcon = new L.Icon({
  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});
 
const greyIcon = new L.Icon({
  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-grey.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});
 
// Helper to center the map on latest GPS position
function RecenterMap({ center }) {
  const map = useMap();
  useEffect(() => {
    console.log("Re-centering map to:", center);
    map.setView(center, map.getZoom(), {
      animate: true,
    });
  }, [center, map]);
  return null;
}
 
function MapView({ gpsData }) {
  if (!gpsData || gpsData.length === 0) {
    return <p style={{ color: "white" }}>No GPS data available</p>;
  }
 
  const positions = gpsData.map((point) => [point.lat, point.lng]);
  const center = positions[positions.length - 1]; // last known point
 
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
        key={JSON.stringify(center)} // force re-render if center changes
        style={{ height: "100%", width: "100%" }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
 
        {/* Dynamic re-centering */}
        <RecenterMap center={center} />
 
        {/* First marker */}
        <Marker position={positions[0]} icon={greyIcon}>
          <Popup>
            {gpsData[0].time
              ? new Date(gpsData[0].time).toLocaleString()
              : "Start point"}
          </Popup>
        </Marker>
 
        {/* Last marker */}
        <Marker position={center} icon={redIcon}>
          <Popup>
            {gpsData[gpsData.length - 1].time
              ? new Date(gpsData[gpsData.length - 1].time).toLocaleString()
              : "Latest point"}
          </Popup>
        </Marker>
 
        {/* Path */}
        <Polyline positions={positions} />
      </MapContainer>
    </div>
  );
}
 
export default MapView;