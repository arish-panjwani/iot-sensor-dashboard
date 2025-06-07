from flask import Flask, jsonify, request
from flask_cors import CORS
import datetime, random

app = Flask(__name__)
CORS(app)

def mock_data():
    return {
        "timestamp": datetime.datetime.now().isoformat(),
        "accelerometer": [round(random.uniform(-10, 10), 2) for _ in range(3)],
        "gyroscope": [round(random.uniform(-180, 180), 2) for _ in range(3)],
        "gps": [round(random.uniform(43.0, 43.9), 6), round(random.uniform(-79.9, -79.0), 6)]
    }

@app.route("/api/live")
def live():
    return jsonify(mock_data())

@app.route("/api/history")
def history():
    start = request.args.get("start")
    end = request.args.get("end")
    data = []
    now = datetime.datetime.now()
    for i in range(10):
        ts = now - datetime.timedelta(minutes=i*5)
        data.append({
            "timestamp": ts.isoformat(),
            "accelerometer": [round(random.uniform(-10, 10), 2) for _ in range(3)],
            "gyroscope": [round(random.uniform(-180, 180), 2) for _ in range(3)],
            "gps": [round(random.uniform(43.0, 43.9), 6), round(random.uniform(-79.9, -79.0), 6)]
        })
    return jsonify(data)

if __name__ == "__main__":
    app.run(debug=True)