/** @format */
 
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SensorDropdown from "./components/SensorDropdown";
import Dashboard from "./pages/Dashboard";
import AllData from "./pages/AllData";
import mockSensorData from "./mockData";
import generateLiveData from "./utils/generateLiveData";
import { fetchPastData, fetchLiveData } from "./utils/api";
import SegmentedTabs from "./components/SegmentedTabs";
import "./App.css";
 
function App() {
  const [sensorType, setSensorType] = useState("accelerometer");
  const [isLive, setIsLive] = useState(false);
  const [useMockAPI, setUseMockAPI] = useState(true);
  const [sensorData, setSensorData] = useState([]);
 
  // Handle Mock + Live data scenarios
  useEffect(() => {
    let interval;
 
    const fetchData = async () => {
      try {
        if (useMockAPI) {
          const data = generateLiveData(sensorType);
          setSensorData(data);
        } else {
          const data = await fetchLiveData(sensorType);
          console.info("Live data fetched:", data);
          setSensorData(data);
        }
      } catch (error) {
        console.error("Error fetching live data:", error);
        setSensorData([]);
      }
    };
 
    if (isLive) {
      fetchData(); // first fetch
      interval = setInterval(fetchData, 2000);
    } else {
      (async () => {
        try {
          if (useMockAPI) {
            setSensorData(mockSensorData[sensorType]);
          } else {
            const data = await fetchPastData(sensorType);
            setSensorData(data);
          }
        } catch (error) {
          console.error("Error fetching past data:", error);
          setSensorData([]);
        }
      })();
    }
 
    return () => clearInterval(interval);
  }, [sensorType, isLive, useMockAPI]);
 
  return (
    <Router>
      <div className="App">
        <h1>IoT Sensor Dashboard</h1>
 
        {/* Top-right corner switches */}
        <div className="top-controls">
          <label className="toggle-switch">
            <span>Use Mock Data</span>
            <input
              type="checkbox"
              checked={useMockAPI}
              onChange={() => setUseMockAPI((prev) => !prev)}
            />
          </label>
          <label className="toggle-switch">
            <span>Show Live Data</span>
            <input
              type="checkbox"
              checked={isLive}
              onChange={() => setIsLive((prev) => !prev)}
            />
          </label>
        </div>
 
        {/* Sensor Selector */}
        <div className="control-bar">
          <SensorDropdown
            selectedSensor={sensorType}
            setSelectedSensor={setSensorType}
          />
        </div>
 
        {/* Navigation Tabs */}
        <SegmentedTabs
          tabs={[
            { label: "Dashboard", path: "/" },
            { label: "All Data", path: "/data" },
          ]}
        />
 
        <Routes>
          <Route
            path="/"
            element={
              <Dashboard sensorType={sensorType} sensorData={sensorData} />
            }
          />
          <Route path="/data" element={<AllData sensorData={sensorData} />} />
        </Routes>
      </div>
    </Router>
  );
}
 
export default App;
 