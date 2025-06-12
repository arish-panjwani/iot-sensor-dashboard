/** @format */

import React, { useState, useEffect, use } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SensorDropdown from "./components/SensorDropdown";
import Dashboard from "./pages/Dashboard";
import AllData from "./pages/AllData";
import { mockSensorData, mockProcessedData } from "./mockData";
import {
  generateLiveData,
  generateLiveProcessedData,
} from "./utils/generateLiveData";
import { fetchPastData, fetchProcessedData, fetchLiveData } from "./utils/api";
import SegmentedTabs from "./components/SegmentedTabs";
import "./App.css";
import ProcessedChartGroup from "./components/ProcessedChartGroup";

function App() {
  const [sensorType, setSensorType] = useState("accelerometer");
  const [isLive, setIsLive] = useState(false);
  const [useMockAPI, setUseMockAPI] = useState(true);
  const [sensorData, setSensorData] = useState([]);
  const [processedData, setProcessedData] = useState([]);
  const [dataStatus, setDataStatus] = useState();

  // Handle Mock + Live data scenarios
  useEffect(() => {
    let interval;

    const fetchData = async () => {
      try {
        if (useMockAPI) {
          const data = generateLiveData(sensorType);
          const processed = generateLiveProcessedData();
          setSensorData(data);
          setProcessedData(processed);
        } else {
          const data = await fetchLiveData(sensorType);
          const processed = await fetchProcessedData();
          setSensorData(data);
          setProcessedData(processed);
        }
      } catch (error) {
        console.error("Error fetching live data:", error);
        setSensorData([]);
        setProcessedData([]);
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
            setProcessedData(mockProcessedData);
          } else {
            const data = await fetchPastData(sensorType);
            const processed = await fetchProcessedData();
            setSensorData(data);
            setProcessedData(processed);
          }
        } catch (error) {
          console.error("Error fetching data:", error);
          setSensorData([]);
          setProcessedData([]);
        }
      })();
    }

    return () => clearInterval(interval);
  }, [sensorType, isLive, useMockAPI]);

  useEffect(() => {
    if (isLive && useMockAPI) {
      setDataStatus("Using Mock API with Live Data");
    } else if (!isLive && useMockAPI) {
      setDataStatus("Using Mock API with Historical Data");
    } else if (isLive && !useMockAPI) {
      setDataStatus("Using Real API with Live Data");
    } else if (!isLive && !useMockAPI) {
      setDataStatus("Using Real API with Historical Data");
    }
  }, [isLive, useMockAPI, dataStatus]);

  return (
    <Router>
      <div className="App">
        <h1>IoT Sensor Dashboard</h1>

        {/* Top-right corner switches */}
        <div className="top-controls">
          <label className="toggle-switch">
            <span>Show Mock Data</span>
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
          <p
            style={{
              fontWeight: "bold",
              color: "green",
            }}>{`(${dataStatus})`}</p>
        </div>

        {/* Navigation Tabs */}
        <SegmentedTabs
          tabs={[
            { label: "Raw Data", path: "/data" },
            { label: "Raw Dashboard", path: "/" },
            { label: "Processed Dashboard", path: "/processed_dashboard" },
            { label: "Processed Data", path: "/processed" },
          ]}
        />

        <Routes>
          <Route
            path="/"
            element={
              <Dashboard sensorType={sensorType} sensorData={sensorData} />
            }
          />
          <Route
            path="/data"
            element={<AllData title={"Raw Data"} data={sensorData} />}
          />
          <Route
            path="/processed_dashboard"
            element={<ProcessedChartGroup data={processedData} />}
          />
          <Route
            path="/processed"
            element={<AllData title={"Processed Data"} data={processedData} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
