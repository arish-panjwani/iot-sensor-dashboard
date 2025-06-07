/** @format */

import mockSensorData from "../mockData";
import axios from "axios";

const BASE_URL = process.env.REACT_APP_API_BASE;

export const fetchPastData = async (sensorType) => {
  try {
    const res = await axios.get(
      `${BASE_URL}/pastData?SensorType=${sensorType}`
    );
    return res.data;
  } catch (error) {
    console.info("Error fetching past data", error);
    return mockSensorData[sensorType] || [];
    // return [];
  }
};

export const fetchLiveData = async (sensorType) => {
  try {
    const res = await axios.get(
      `${BASE_URL}/liveData?SensorType=${sensorType}`
    );
    return res.data;
  } catch (error) {
    console.info("Error fetching live data", error);
    return [];
  }
};
