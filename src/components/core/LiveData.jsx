import { child, get, ref } from "firebase/database";
import React, { useEffect, useState } from "react";
import db from "../comps/Firebase";
// IMport necessary libraries

const LiveData = () => {
  // Initialise state variables
  const [data, setData] = useState({});
  const [mostrecentdata, setMostRecent] = useState({});
  const [light, setLight] = useState(0);
  const [gas, setGas] = useState(1);
  const [temp, setTemp] = useState(0);
  const [time, setTime] = useState("");

  // Get Single most recent piece of data from the dictionary
  const getMostRecent = () => {
    const reversedData = Object.keys(data).reverse();
    const mostRecentKey = reversedData[0];
    setMostRecent(data[mostRecentKey]);
  };

  // Set each state variable to the most recent data point
  const setEachDataPoint = () => {
    setGas(mostrecentdata["Gas State"]);
    setLight(mostrecentdata["Light Level"]);
    setTemp(mostrecentdata["Temperature"]);
    setTime(mostrecentdata["Time of event"]);
  };

  // Return array of each different piece of data
  const getData = () => {
    return [light, gas, temp, time];
  };

  // Lifecycle function called periodically, used to update the data
  useEffect(() => {
    const dbRef = ref(db);
    get(child(dbRef, `UploadedData/`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          setData(snapshot.val());
          getMostRecent();
          setEachDataPoint();
          // Get data
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, [data]);

  // Return HTML with data passed into it
  return (
    <div className="container-fluid text-center">
      <h3> Live Data </h3>

      <div className="row mt-5">
        <div className="col-sm-4"> </div>
        <div
          className="col-sm-4 text-center mt-5"
          style={getData()[1] ? safeStyle : dangerStyle}
        >
          <div>
            <div className="mt-2">
              <p> Gas State: {getData()[1] ? "Safe" : "Danger"}</p>
              <p> Light Level: {getData()[0]}</p>
              <p> Temperature: {getData()[2]}</p>
              <p> Time: {getData()[3]}</p>
            </div>
          </div>
        </div>
        <div className="col-sm-4"> </div>
      </div>
    </div>
  );
};

// Make custom styles for elements in the HTML

const safeStyle = {
  backgroundColor: "#ccc",
  borderRadius: "5px",
};

const dangerStyle = {
  backgroundColor: "#d61a1a",
  borderRadius: "5px",
};

export default LiveData;
