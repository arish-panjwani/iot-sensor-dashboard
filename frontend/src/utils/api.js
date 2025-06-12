/** @format */

// Api.js
import axios from "axios";

const BASE_URL = process.env.REACT_APP_API_BASE;

export const fetchPastData = async (sensorType) => {
  try {
    const res = await axios.get(
      `${BASE_URL}/api/sensor_data?sensortype=${sensorType}`
    );
    return res.data;
  } catch (error) {
    console.info("Error fetching past data", error);
    return [];
  }
};

export const fetchLiveData = async (sensorType) => {
  try {
    const url = `${BASE_URL}/api/sensor_data?sensortype=${sensorType}`;
    const res = await axios.get(url);
    const result = Array.isArray(res.data) ? res.data : res.data.data;
    return result;
  } catch (error) {
    console.info("Error fetching live data", error);
    return [];
  }
};

export const fetchGpsData = async () => {
  try {
    const url = `${BASE_URL}/api/sensor_data?sensortype=gps`;
    const res = await axios.get(url);
    return res.data.map(({ lat, lng, time }) => ({ lat, lng, time }));
  } catch (error) {
    console.info("Error fetching GPS data", error);
    return [];
  }
};

export const fetchProcessedData = async () => {
  try {
    const res = await axios.get(`${BASE_URL}/api/processed_data`);
    return res.data;
  } catch (error) {
    console.info("Error fetching processed data", error);
    return [];
  }
};
