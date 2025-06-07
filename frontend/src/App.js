/** @format */

import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import SensorDropdown from "./components/SensorDropdown";
import Dashboard from "./pages/Dashboard";
import AllData from "./pages/AllData";
import mockSensorData from "./mockData";
import generateLiveData from "./utils/generateLiveData";
import "./App.css";
import SegmentedTabs from "./components/SegmentedTabs"; // at the top
import { fetchPastData, fetchLiveData } from "./utils/api";

function App() {
  const [sensorType, setSensorType] = useState("accelerometer");
  const [isLive, setIsLive] = useState(false);
  const [liveData, setLiveData] = useState(generateLiveData("accelerometer")); // ✅ initialize with default

  // 🔁 Live Data Generator — runs on sensor change or live toggle
  useEffect(() => {
    if (!isLive) return;

    // Generate first batch immediately when sensor changes
    setLiveData(generateLiveData(sensorType));

    // Then set interval
    const interval = setInterval(() => {
      const newData = generateLiveData(sensorType);
      setLiveData(newData);
    }, 2000);

    // Clear interval on unmount or sensorType/isLive change
    return () => clearInterval(interval);
  }, [isLive, sensorType]);

  const handleSwitchChange = () => setIsLive((prev) => !prev);

  // 🔄 Select live or static data dynamically
  const sensorData = isLive ? liveData : mockSensorData[sensorType];

  // For PAST (static) data
  useEffect(() => {
    if (isLive) return;

    const getPastData = async () => {
      const data = await fetchPastData(sensorType);
      setLiveData(data);
    };

    getPastData();
  }, [sensorType, isLive]);

  // For LIVE data (poll every 2 seconds)
  useEffect(() => {
    if (!isLive) return;

    const interval = setInterval(async () => {
      const data = await fetchLiveData(sensorType);
      setLiveData(data);
    }, 2000);

    return () => clearInterval(interval);
  }, [sensorType, isLive]);

  return (
    <Router>
      <div className="App">
        <h1>IoT Sensor Dashboard</h1>

        {/* Dropdown + Live Toggle */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "1rem",
          }}>
          <SensorDropdown
            selectedSensor={sensorType}
            setSelectedSensor={setSensorType}
          />
          <label
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              color: "white",
            }}>
            <span>Show Live Data</span>
            <input
              type="checkbox"
              style={{ width: "25px", height: "25px" }}
              checked={isLive}
              onChange={handleSwitchChange}
            />
          </label>
        </div>

        {/* Navigation */}
        {/* <div
          style={{
            margin: "20px 0",
            textAlign: "center",
            fontSize: "1.8em",
            fontFamily: "Arial, sans-serif",
            fontWeight: "bold",
            padding: "10px",
            borderRadius: "5px",
            boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
            transition: "background-color 0.3s ease",
            cursor: "pointer",
          }}>
          <nav>
            <Link to="/">Dashboard</Link> || <Link to="/data">All Data</Link>
          </nav>
        </div> */}

        <SegmentedTabs
          tabs={[
            { label: "Dashboard", path: "/" },
            { label: "All Data", path: "/data" },
          ]}
        />

        {/* Routes */}
        <Routes>
          <Route
            path="/"
            element={
              // <Dashboard sensorType={sensorType} sensorData={sensorData} />
              <Dashboard sensorData={liveData} sensorType={sensorType} />
            }
          />
          <Route
            path="/data"
            element={
              // <AllData sensorData={sensorData} />
              <AllData sensorData={liveData} />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
