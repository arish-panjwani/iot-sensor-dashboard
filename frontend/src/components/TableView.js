/** @format */

import { getFormattedDateTime } from "../utils/helper";

function TableView({ data }) {
  if (!data || data.length === 0 || !data[0]) {
    return <p style={{ color: "white" }}>No Data Available</p>;
  }

  // Ensure 'id' is first in column order
  const keys = Object.keys(data[0]);
  const orderedKeys = ["id", ...keys.filter((key) => key !== "id")];

  return (
    <div style={{ overflowX: "auto" }}>
      <table
        style={{ width: "100%", borderCollapse: "collapse", color: "white" }}>
        <thead>
          <tr>
            {orderedKeys.map((key) => (
              <th
                key={key}
                style={{ border: "1px solid white", padding: "8px" }}>
                {key}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i}>
              {orderedKeys.map((key) => (
                <td
                  key={key}
                  style={{ border: "1px solid white", padding: "8px" }}>
                  {key.toLowerCase() === "time" ||
                  key.toLowerCase() === "timestamp"
                    ? getFormattedDateTime(row[key])
                    : row[key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TableView;
