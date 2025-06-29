/** @format */

import { getFormattedDateTime } from "./utils/helper";

export const mockSensorData = {
  accelerometer: [
    {
      time: getFormattedDateTime("2025-06-07T01:20:44.392138Z"),
      x: 12,
      y: 5,
      z: 7,
    },
    {
      time: getFormattedDateTime("2025-06-06T17:13:38.074274Z"),
      x: 14,
      y: 6,
      z: 9,
    },
    {
      time: getFormattedDateTime("2025-06-07T03:40:04.097433Z"),
      x: 11,
      y: 7,
      z: 6,
    },
  ],
  gyroscope: [
    {
      time: getFormattedDateTime("2025-06-07T01:20:44.392138Z"),
      alpha: 30,
      beta: 45,
      gamma: 60,
    },
    {
      time: getFormattedDateTime("2025-06-06T17:13:38.074274Z"),
      alpha: 35,
      beta: 50,
      gamma: 55,
    },
    {
      time: getFormattedDateTime("2025-06-07T03:40:04.097433Z"),
      alpha: 32,
      beta: 47,
      gamma: 58,
    },
  ],
  gps: [
    {
      time: getFormattedDateTime("2025-06-07T01:20:44.392138Z"),
      lat: 43.722950802404384,
      lng: -79.30911610825535,
    },
    {
      time: getFormattedDateTime("2025-06-06T17:13:38.074274Z"),
      lat: 43.722950802404384,
      lng: -79.30911610825535,
    },
    {
      time: getFormattedDateTime("2025-06-07T03:40:04.097433Z"),
      lat: 43.722950802404384,
      lng: -79.30911610825535,
    },
  ],
};

export const mockProcessedData = [
  {
    id: 100,
    sensor_data_id: 200,
    timestamp: getFormattedDateTime("2025-06-08T12:49:30Z"),
    acc_mag: 10.0643,
    jerk: 1.075,
    distance: 0.0000130993,
    speed: 1.292,
    direction: "Right",
    event: "Drop",
    rel_x: -4.95e-10,
    rel_y: 1.06e-10,
    delta_time: null,
  },
  {
    id: 101,
    sensor_data_id: 201,
    timestamp: getFormattedDateTime("2025-06-08T12:49:30Z"),
    acc_mag: 9.9796,
    jerk: null,
    distance: 0.0000155571,
    speed: 0.103,
    direction: "Down",
    event: "Tilt",
    rel_x: 8e-12,
    rel_y: -8.82e-10,
    delta_time: null,
  },
  {
    id: 102,
    sensor_data_id: 202,
    timestamp: getFormattedDateTime("2025-06-08T12:49:30Z"),
    acc_mag: 9.7119,
    jerk: 0.734,
    distance: 0.0000125782,
    speed: 1.486,
    direction: "Left",
    event: "Normal",
    rel_x: 4.8e-11,
    rel_y: -1.4e-11,
    delta_time: null,
  },
  {
    id: 103,
    sensor_data_id: 203,
    timestamp: getFormattedDateTime("2025-06-08T12:49:30Z"),
    acc_mag: 9.9632,
    jerk: null,
    distance: 0.0000112394,
    speed: 0.912,
    direction: "Up",
    event: "Lift Up - Up",
    rel_x: 6.9e-10,
    rel_y: -2.8e-10,
    delta_time: null,
  },
  {
    id: 104,
    sensor_data_id: 204,
    timestamp: getFormattedDateTime("2025-06-08T12:49:30Z"),
    acc_mag: 9.864,
    jerk: 2.174,
    distance: 0.0000192833,
    speed: 1.073,
    direction: "Down",
    event: "Shake",
    rel_x: -7.4e-10,
    rel_y: 6.3e-10,
    delta_time: null,
  },
];
