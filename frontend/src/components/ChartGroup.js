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

const generateChartData = (sensorType, data) => {
  if (!data || data.length === 0 || !data[0]) return [];

  const keys = Object.keys(data[0]).filter((k) => k.toLowerCase() !== "time");

  return keys.map((key) => ({
    label: key,
    data: data.map((d) => d[key]),
    backgroundColor: "rgba(75,192,192,0.4)",
    borderColor: "rgba(75,192,192,1)",
    fill: true,
  }));
};

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

function ChartGroup({ sensorType, sensorData }) {
  if (!sensorData || sensorData.length === 0 || !sensorData[0]) {
    return <p style={{ color: "white" }}>No data available for charts</p>;
  }

  const labels = sensorData.map((d) => getFormattedDateTime(d.time));
  const datasets = generateChartData(sensorType, sensorData);
  const chartConfig = { labels, datasets };

  return (
    <div className="grid-container">
      <div className="chart-box">
        <Bar data={chartConfig} options={chartOptions} />
      </div>
      <div className="chart-box">
        <Line data={chartConfig} options={chartOptions} />
      </div>
      <div className="chart-box">
        <Doughnut data={chartConfig} options={chartOptions} />
      </div>
      <div className="chart-box">
        <Radar data={chartConfig} options={chartOptions} />
      </div>
    </div>
  );
}

export default ChartGroup;
