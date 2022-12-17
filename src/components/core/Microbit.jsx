import React from "react";
import { ref, child, get } from "firebase/database";
import db from "../comps/Firebase";
import CustomGraph from "../comps/CustomGraph";
import { useState } from "react";
import { useEffect } from "react";

// Importing necessary libraries

const Microbit = () => {
  // Making state variables
  const [data, setData] = useState({});
  const [lightbtn, setLightBtn] = useState(true);
  const [tempbtn, setTempBtn] = useState(false);
  const [statbtn, setStatBtn] = useState(false);

  // Light and temp data architecture
  // lightdata = [{level: lightlevel, name: TimeOfEvent}, {}, {}...]
  // tempdata = [{level: temperature, name: TimeOfEvent}, {}, {}...]

  const grabLightData = (n) => {
    // Returns an array of objects containing the lightlevel and the time of the light level
    // Reversing the list, to get data sorted in order (by time)
    let reversedData = Object.keys(data).reverse();
    // Initialise the array
    let lightlevelArray = [];

    // Loop through reversed data
    for (const index in reversedData) {
      // Get KeyID for each dictionary containing the data in the higher dictionary
      const entryID = reversedData[index];
      const lightleveldata = {
        level: data[entryID]["Light Level"], // Pull light data
        time: data[entryID]["Time of event"].slice(n), // Pull time, make the stamp smaller depending on the amount of data to not make the graph crammed
      };

      // Append to light array
      lightlevelArray.push(lightleveldata);
    }

    // Return light array
    return lightlevelArray;
  };

  const grabTempData = (n) => {
    // Reverse data
    let reversedData = Object.keys(data).reverse();
    // Initialise temperature array
    let templevelArray = [];

    // Loop through reversed array
    for (const index in reversedData) {
      // Get each key
      let entryID = reversedData[index];
      const templeveldata = {
        level: data[entryID]["Temperature"], // Temperature
        time: data[entryID]["Time of event"].slice(n), // Time
      };

      // Append to initialised array
      templevelArray.push(templeveldata);
    }

    // Return this array
    return templevelArray;
  };

  // Grab the first 'n' number of elements in a given array
  const grabFirsti = (n, array) => {
    let newArray = [];
    for (let i = 0; i < n; i++) {
      newArray.push(array[i]);
    }
    return newArray;
  };

  // Determine how much to slice from the time stamp depending on the size of the data
  const calculateN = (size) => {
    if (size <= 10) {
      return 0;
    } else if (size > 10 && size <= 120) {
      return 11;
    } else if (size > 120 && size <= 200) {
      return 14;
    } else if (size > 200 && size <= 250) {
      return 17;
    } else {
      return 19;
    }
  };

  useEffect(() => {
    // This function is called periodically, it is a react lifecycle function
    const dbRef = ref(db); // Creating a reference for the firebase database
    get(child(dbRef, `UploadedData/`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          setData(snapshot.val());
          // Getting data
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, [data]);

  // Button Handling
  const handleLightBtnClick = () => {
    setLightBtn(true);
    setTempBtn(false);
  };

  const handleTempBtnClick = () => {
    setLightBtn(false);
    setTempBtn(true);
  };

  // Calculate some averages
  const getStatsData = () => {
    let lightArray = [];
    let tempArray = [];
    let averageLight = 0;
    let averageTemperature = 0;
    for (const entryID in data) {
      lightArray.push(data[entryID]["Light Level"]);
      tempArray.push(data[entryID]["Temperature"]);
    }

    for (let i in lightArray) {
      averageLight += lightArray[i];
    }

    for (let j in tempArray) {
      averageTemperature += tempArray[j];
    }

    averageLight = averageLight / lightArray.length;
    averageTemperature = averageTemperature / tempArray.length;
    return [averageLight, averageTemperature];
  };

  // Button handler
  const handleStatsBtnClick = () => {
    setStatBtn(!statbtn);
  };

  // Returning HTML for the microbit page with the data passed to it.
  return (
    <div className="text-center container-fluid m-0">
      <h1>Microbit Data Representation</h1>

      <div>
        <div className="container-fluid text-center">
          <div
            className="row"
            style={{
              borderBottom: "solid",
              borderWidth: ".5px",
              borderColor: "#ccc",
            }}
          >
            <div className="col-sm-9 bg-light text-start">
              <button
                className={
                  lightbtn
                    ? "btn btn-sm btn-dark m-1"
                    : "btn btn-sm btn-light m-1"
                }
                onClick={handleLightBtnClick}
              >
                Light Data
              </button>
              <button
                className={
                  tempbtn
                    ? "btn btn-sm btn-dark m-1"
                    : "btn btn-sm btn-light m-1"
                }
                onClick={handleTempBtnClick}
              >
                Temperature Data
              </button>
            </div>

            <div className="col-sm-3 bg-light">
              <h5 className="mt-2">Options</h5>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-9 bg-light">
              {lightbtn && (
                <CustomGraph
                  data={grabFirsti(
                    Object.keys(data).length,
                    grabLightData(calculateN(Object.keys(data).length))
                  ).reverse()}
                />
              )}

              {tempbtn && (
                <CustomGraph
                  data={grabFirsti(
                    Object.keys(data).length,
                    grabTempData(calculateN(Object.keys(data).length))
                  ).reverse()}
                />
              )}
            </div>
            <div
              className="col-sm-3 bg-light"
              style={{
                borderLeft: "solid",
                borderWidth: ".5px",
                borderColor: "#ccc",
              }}
            >
              <div className="mt-4">
                <button
                  className="btn btn-dark m-1"
                  onClick={handleStatsBtnClick}
                >
                  Statistics
                </button>
              </div>
            </div>
          </div>

          <div className="row text-center">
            <div className="container text-center">
              {statbtn && lightbtn && (
                <div>
                  <small> Average Light Level </small>
                  <p> {getStatsData()[0]} </p>
                </div>
              )}

              {statbtn && tempbtn && (
                <div>
                  <small> Average Temperature </small>
                  <p> {getStatsData()[1]} </p>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="text-center container-fluid"></div>
      </div>
    </div>
  );
};

export default Microbit;
