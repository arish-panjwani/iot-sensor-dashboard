/** @format */

import { getFormattedDateTime } from "./helper";

export const generateLiveData = (sensorType) => {
  //   const now = new Date();
  const time = new Date().toISOString();

  if (sensorType === "accelerometer") {
    return [
      {
        time: getFormattedDateTime(time),
        x: Math.random() * 20,
        y: Math.random() * 20,
        z: Math.random() * 20,
      },
      {
        time: getFormattedDateTime(time),
        x: Math.random() * 20,
        y: Math.random() * 20,
        z: Math.random() * 20,
      },
      {
        time,
        x: Math.random() * 20,
        y: Math.random() * 20,
        z: Math.random() * 20,
      },
    ];
  }

  if (sensorType === "gyroscope") {
    return [
      {
        time: getFormattedDateTime(time),
        alpha: Math.random() * 90,
        beta: Math.random() * 90,
        gamma: Math.random() * 90,
      },
      {
        time: getFormattedDateTime(time),
        alpha: Math.random() * 90,
        beta: Math.random() * 90,
        gamma: Math.random() * 90,
      },
      {
        time: getFormattedDateTime(time),
        alpha: Math.random() * 90,
        beta: Math.random() * 90,
        gamma: Math.random() * 90,
      },
    ];
  }

  if (sensorType === "gps") {
    return [
      {
        time: getFormattedDateTime(time),
        lat: 43.722950802404384,
        lng: -19.30911610825535,
      },
    ];
  }

  return [];
};

export const generateLiveProcessedData = () => {
  //   const now = new Date();
  const time = new Date().toISOString();

  return [
    {
      acc_mag: 9.77979671148368,
      delta_time: 0.0,
      direction: "Up",
      distance: 0.0,
      event: "Normal",
      id: 43,
      jerk: 0.0,
      rel_x: 0.0,
      rel_y: 0.0,
      speed: 0.0,
      time: getFormattedDateTime(time),
    },
    {
      acc_mag: 9.776650842461308,
      delta_time: 0.0,
      direction: "Up",
      distance: 0.0,
      event: "Normal",
      id: 38,
      jerk: 0.0,
      rel_x: 0.0,
      rel_y: 0.0,
      speed: 0.0,
      time: getFormattedDateTime(time),
    },
  ];
};
