/** @format */

const generateLiveData = (sensorType) => {
  //   const now = new Date();
  const time = new Date().toISOString();

  if (sensorType === "accelerometer") {
    return [
      {
        time,
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
        time,
        alpha: Math.random() * 90,
        beta: Math.random() * 90,
        gamma: Math.random() * 90,
      },
      {
        time,
        alpha: Math.random() * 90,
        beta: Math.random() * 90,
        gamma: Math.random() * 90,
      },
      {
        time,
        alpha: Math.random() * 90,
        beta: Math.random() * 90,
        gamma: Math.random() * 90,
      },
    ];
  }

  if (sensorType === "gps") {
    return [
      {
        time,
        lat: 43.722950802404384,
        lng: -19.30911610825535,
      },
    ];
  }

  return [];
};

export default generateLiveData;