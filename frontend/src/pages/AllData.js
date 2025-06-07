/** @format */

import React from "react";
import TableView from "../components/TableView";

function AllData({ sensorData }) {
  return (
    <div>
      <h2>All Data</h2>
      <TableView data={sensorData} />
    </div>
  );
}

export default AllData;
