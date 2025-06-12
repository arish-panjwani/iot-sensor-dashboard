/** @format */

import React from "react";
import TableView from "../components/TableView";

function AllData({ data, title }) {
  return (
    <div>
      <h2>{title}</h2>
      <TableView data={data} />
    </div>
  );
}

export default AllData;
