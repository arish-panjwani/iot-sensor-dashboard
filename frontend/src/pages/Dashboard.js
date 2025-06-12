/** @format */

// Dashboard.js
import { useEffect, useState } from "react";
import ChartGroup from "../components/ChartGroup";
import MapView from "../components/MapView";
import { fetchGpsData } from "../utils/api"; // adjust path as needed

function Dashboard({ sensorType, sensorData }) {
  const [gpsData, setGpsData] = useState([]);

  const isMap = sensorType === "gps";

  useEffect(() => {
    if (isMap) {
      const getGps = async () => {
        const data = await fetchGpsData();
        setGpsData(data);
      };
      getGps();
    }
  }, [isMap, sensorType]);

  const mapStyle = isMap
    ? {
        justifyContent: "center",
        display: "flex",
      }
    : {};

  return (
    <div
      style={{
        marginRight: "2rem",
        marginLeft: "2rem",
        paddingBottom: "1rem",
        ...mapStyle,
      }}>
      {isMap ? (
        <MapView gpsData={gpsData} />
      ) : (
        <ChartGroup sensorType={sensorType} sensorData={sensorData} />
      )}
    </div>
  );
}

export default Dashboard;
