# 📊 IoT Sensor Dashboard

A web-based dashboard built with **React** to visualize real-time and historical IoT sensor data (e.g., accelerometer, gyroscope). The app supports both mock data and live API integrations, making it ideal for development, testing, and demos.

---

## 🚀 Features

- 📈 Real-time sensor data visualization (Bar, Line, Doughnut, Radar charts)
- 📋 Tabular view of all past data with timestamp formatting
- 🔁 Toggle between **Live API** and **Mock API** modes
- ⌛ ISO timestamp formatting in 12/24-hour clock with human-readable labels
- 🔧 Built-in support for both accelerometer and gyroscope types
- 🌐 Easily switch between API environments using `.env`

---

## 📂 Project Structure

```
├── frontend/
│   ├── components/
│   │   ├── ChartGroup.js
│   │   ├── TableView.js
│   │   ├── SensorDropdown.js
│   ├── pages/
│   │   ├── Dashboard.js
│   │   ├── AllData.js
│   ├── utils/
│   │   ├── api.js
│   │   ├── generateLiveData.js
│   ├── App.js
│   ├── App.css
├── mockData.js
```

---

## ⚙️ Environment Variables

Create a `.env` file in your root and add:

```env
REACT_APP_API_BASE=https://your-api-base-url.com/data/v1
```

For MockAPI.io:

```env
REACT_APP_API_BASE=https://your-mockapi-id.mockapi.io/data/v1
```

---

## 🧪 Run Locally

### 1. Install dependencies

```bash
npm install
```

### 2. Start the React app

```bash
npm start
```

The app runs at `http://localhost:3000`.

---

## 🛰️ API Format

### Expected API response:
```json
[
  {
    "time": "2025-06-07T03:40:04.097Z",
    "x": 1.2,
    "y": 0.9,
    "z": -0.4
  },
  ...
]
```

Supports both:
- `"SensorType": "accelerometer"`
- `"SensorType": "gyroscope"`

---

## 🔄 Toggle Controls

- **Sensor Type**: Dropdown selector (`accelerometer`, `gyroscope`)
- **Live Toggle**: Checkbox to switch between live and static data
- **Mock API Toggle**: Simulates live updates using modified API data

---

## 📸 Screenshots

<img width="1440" alt="image" src="https://github.com/user-attachments/assets/822377b1-c09a-4487-8388-88ba2c589e91" />


---

## 📄 License

MIT

---

## 👨‍💻 Author

**Arish Panjwani**  
🔗 [github.com/arish-panjwani](https://github.com/arish-panjwani)
