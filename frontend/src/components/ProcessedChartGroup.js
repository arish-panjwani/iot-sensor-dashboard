/** @format */

import {
  ArcElement,
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  RadialLinearScale,
  Tooltip,
} from "chart.js";
import { Bar, Doughnut, Line, Radar } from "react-chartjs-2";
import { getFormattedDateTime } from "../utils/helper";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  ArcElement,
  PointElement,
  RadialLinearScale,
  Tooltip,
  Legend
);

function ProcessedChartGroup({ data }) {
  if (!data || data.length === 0) {
    return <p style={{ color: "white" }}>No processed data available</p>;
  }

  const labels = data.map((d) => getFormattedDateTime(d.time) || d.timestamp);

  const getChartData = (label, field) => ({
    labels,
    datasets: [
      {
        label,
        data: data.map((d) => d[field]),
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
        fill: true,
      },
    ],
  });

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { labels: { color: "white" } },
    },
    scales: {
      x: { ticks: { color: "white" } },
      y: { ticks: { color: "white" } },
    },
  };

  return (
    <div className="grid-container">
      <div className="chart-box">
        <Line
          data={getChartData("Acceleration Magnitude", "acc_mag")}
          options={chartOptions}
        />
      </div>
      <div className="chart-box">
        <Bar data={getChartData("Speed", "speed")} options={chartOptions} />
      </div>
      <div className="chart-box">
        <Line
          data={getChartData("Distance", "distance")}
          options={chartOptions}
        />
      </div>
      <div className="chart-box">
        <Radar
          data={getChartData("Relative Movement", "rel_x")}
          options={chartOptions}
        />
      </div>
      <div className="chart-box">
        <Doughnut
          data={{
            labels: [...new Set(data.map((d) => d.event))],
            datasets: [
              {
                label: "Event Frequency",
                data: Object.values(
                  data.reduce((acc, d) => {
                    acc[d.event] = (acc[d.event] || 0) + 1;
                    return acc;
                  }, {})
                ),
                backgroundColor: [
                  "#36A2EB",
                  "#FF6384",
                  "#FFCE56",
                  "#4BC0C0",
                  "#9966FF",
                ],
              },
            ],
          }}
          options={chartOptions}
        />
      </div>
    </div>
  );
}

export default ProcessedChartGroup;
