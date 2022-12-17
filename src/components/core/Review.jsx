import React, { useState } from "react";
import { child, ref, update, push } from "firebase/database";
import db from "../comps/Firebase";
// IMporting necessary libraries

const Review = () => {
  // Initialising state variables
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [review, setReview] = useState("");
  const [isSatisfied, setSatisfied] = useState(false);
  const [level, setLevel] = useState(50);

  // Handling event once submitting the form
  const handleSubmit = (event) => {
    event.preventDefault(); // Preventing the page from refreshing once submitted
    // Data to upload
    let data = {
      name: name.length == 0 ? "N/A" : name,
      email: email.length == 0 ? "N/A" : email,
      review: review,
      isSatisfied: isSatisfied,
      level: level,
    };

    // Pushing to database
    const newPostKey = push(child(ref(db), "Reviews")).key;
    const updates = {};
    updates["/Reviews/" + newPostKey] = data;
    const result = update(ref(db), updates);

    // Removing the data from each element
    document.getElementById("nameinput").value = "";
    document.getElementById("emailinput").value = "";
    document.getElementById("reviewinput").value = "";
    document.getElementById("checkbox").value = "off";
    document.getElementById("range").value = "50";
    document.getElementById("submitbtn").disabled = review.length < 1;

    alert("Review submitted");
  };

  // Return HTML for the form etc..
  return (
    <div className="container-fluid text-center">
      <div className="row text-center mt-3 mb-3">
        <header>
          <h5>Leave a review!</h5>
        </header>
      </div>

      <div className="row text-start">
        <p>
          Thank you for using Blue Mesa systems, please let us know what your
          opinion is, to know what areas need work.
        </p>

        <div className="form-group">
          <form onSubmit={handleSubmit}>
            <label>
              Name (Optional) <br />
              <input
                id="nameinput"
                type="text"
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
              />
            </label>

            <br />

            <label>
              Email (Optional) <br />
              <input
                id="emailinput"
                type="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <br />
              <small>We will never share this with anyone else.</small>
            </label>

            <br />

            <label>
              Your opinions <br />
              <textarea
                id="reviewinput"
                onChange={(e) => setReview(e.target.value)}
                placeholder="Your review"
                className="form-control rounded-0"
                rows="10"
              />
              <small> In general, are you satisfied with our product?</small>
              <input
                id="checkbox"
                type="checkbox"
                onChange={(e) => setSatisfied(e.target.value)}
              />
              <br />
              <small>
                How satisfied or disatisfied are you with this product?
              </small>
              <br />
              <input
                id="range"
                type="range"
                min="1"
                max="100"
                defaultValue={level.toString()}
                onChange={(e) => setLevel(e.target.value)}
              />
            </label>
            <br />
            <input
              id="submitbtn"
              type="submit"
              className="btn btn-dark"
              disabled={review.length < 1}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Review;
