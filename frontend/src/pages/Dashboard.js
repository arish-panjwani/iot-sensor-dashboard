/** @format */
 
import ChartGroup from "../components/ChartGroup";
import MapView from "../components/MapView";
 
function Dashboard({ sensorType, sensorData }) {
  //gps dummy data for testing
  const gpsData = [
    {
      time: "2025-06-07T03:40:04.097Z",
      lat: 43.722950802404384,
      lng: -79.30911610825535,
    },
  ];
 
  const isMap = sensorType === "gps";
  const mapStyle = isMap
    ? {
        justifyContent: "center",
        display: "flex",
      }
    : {};
 
  return (
    <div
      style={{
        marginRight: "2rem",
        marginLeft: "2rem",
        paddingBottom: "1rem",
        ...mapStyle,
      }}>
      {isMap ? (
        <MapView gpsData={gpsData} />
      ) : (
        <ChartGroup sensorType={sensorType} sensorData={sensorData} />
      )}
    </div>
  );
}
 
export default Dashboard;
