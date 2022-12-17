import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./core/Home";
import Microbit from "./core/Microbit";
import LiveData from "./core/LiveData";
import About from "./core/About";
import Review from "./core/Review";

import CustomNav from "./comps/CustomNav";

// IMport necessary libraries

const App = () => {
  // Return base HTML and components
  return (
    <>
      <CustomNav />
      <Router>
        <div className="content">
          <Routes>
            <Route index element={<Home />} />
            <Route path="microbit" element={<Microbit />} />
            <Route path="live" element={<LiveData />} />
            <Route path="about" element={<About />} />
            <Route path="review" element={<Review />} />
          </Routes>
        </div>
      </Router>
    </>
  );
};

export default App;
