// Importing necessary assets and libraries
import React from "react";
import home from "../../assets/home-automation-design-concept-vector.jpg";

const Home = () => {
  // Returns the HTML for the home page, no logic here

  return (
    <div>
      <div className="container-fluid text-center">
        <div className="row mb-4 mt-4">
          <header>
            <h2>Blue Mesa Embedded Systems</h2>
          </header>
        </div>

        <div
          className="row"
          style={{
            borderBottom: "solid",
            borderColor: "#ccc",
            borderWidth: ".5px",
          }}
        >
          <div className="col-sm-4">
            <h5 className="mt-3">Our mission.</h5>
          </div>
          <div className="col-sm-4">
            <h5 className="mt-3">What to expect from us.</h5>
          </div>
          <div className="col-sm-4">
            <h5 className="mt-3">Other info.</h5>
          </div>
        </div>

        <div className="row">
          <div
            className="col-sm-4 text-start"
            style={{
              borderRight: "solid",
              borderWidth: ".5px",
              borderColor: "#ccc",
            }}
          >
            <p>
              Our mission is to provide an affordable, yet complex and reliable
              home automation and monitoring.{" "}
            </p>
            <img
              src={home}
              alt=""
              style={{ width: "100%" }}
              className="img-fluid"
            />
            <p>
              Our mission is only complete once <u>you</u> are satisfied with
              your embedded system
            </p>
          </div>
          <div className="col-sm-4">
            <p>
              Our customers should expect nothing less than absolute comfort and
              relief.
            </p>
            <p>
              Our engineers spend months, creating, testing, and designing the
              artefacts that will placed in your home.
            </p>
            <p>
              During installation, our professional team of engineers will take
              input from you, our customer, and install the embedded system as
              to your liking.
            </p>
            <p>
              Expect professionalism, ease as you join us in fully taking
              control of your home
            </p>
          </div>
          <div
            className="col-sm-4"
            style={{
              borderLeft: "solid",
              borderWidth: ".5px",
              borderColor: "#ccc",
            }}
          >
            <p>
              Our embedded system is an IoT device, which means that it
              essentially part of a network of other devices and systems working
              together
            </p>
            <p>
              To make this interactive control panel, the embedded system was
              required to upload data to a database on Google's firebase
              platform.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
