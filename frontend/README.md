# 📊 IoT Sensor Dashboard (Frontend)

This is the **React-based frontend** for the IoT Sensor Dashboard project, built using [Create React App](https://github.com/facebook/create-react-app).

It visualizes real-time and historical sensor data from devices like accelerometers and gyroscopes using charts and tables, with support for both **mock** and **live API** data.

---

## 🚀 Available Scripts

In the `frontend/` directory, you can run:

### `npm install`

Installs all necessary dependencies.

### `npm start`

Runs the app in development mode.  
Visit [http://localhost:3000](http://localhost:3000) in your browser.

- Supports hot reloading
- Displays lint errors in the console
- Pulls live or mock data depending on toggle

### `npm run build`

Builds the app for production in the `build/` folder.  
Minifies and optimizes the app for deployment.

### `npm test`

Launches the test runner in interactive watch mode. *(Currently not configured)*

### `npm run eject`

**Use with caution.** Ejects the CRA config if full customization is needed. This action is irreversible.

---

## 🌐 Environment Setup

Create a `.env` file in the root of `frontend/` and define your API base:

```env
REACT_APP_API_BASE=https://your-api-url.com/data/v1
```

---

## 🧠 Project Highlights

- Switch between `accelerometer` and `gyroscope` data
- Toggle between **Live API** and **Mock API**
- Visualize data via Chart.js (Bar, Line, Radar, Doughnut)
- Tabular history with nicely formatted timestamps (12/24-hour)
- React Router integration with routes for dashboard and table view

---

## 🛠 Tech Stack

- React.js
- Chart.js
- Axios
- React Router DOM
- CSS (custom styling)
- MockAPI.io (for testing backend)

---

## 📚 Learn More

- [React Documentation](https://reactjs.org/)
- [Create React App Docs](https://facebook.github.io/create-react-app/docs/getting-started)
- [Chart.js](https://www.chartjs.org/)
