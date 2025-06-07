/** @format */

import React from "react";

function SensorDropdown({ selectedSensor, setSelectedSensor }) {
  return (
    <div style={{ fontSize: "1.2em" }}>
      <label htmlFor="sensor-select" style={{ marginRight: "10px" }}>
        Select Sensor:
      </label>
      <select
        style={{ fontSize: "1.2em" }}
        value={selectedSensor}
        onChange={(e) => setSelectedSensor(e.target.value)}>
        <option value="accelerometer">Accelerometer</option>
        <option value="gyroscope">Gyroscope</option>
      </select>
    </div>
  );
}

export default SensorDropdown;
