/** @format */

import React from "react";
import ChartGroup from "../components/ChartGroup";

function Dashboard({ sensorType, sensorData }) {
  return (
    <div>
      <ChartGroup sensorType={sensorType} sensorData={sensorData} />
    </div>
  );
}

export default Dashboard;
