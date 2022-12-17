import React from "react";

const About = () => {
  // No logic here, returning HTML
  return (
    <div className="container-fluid text-center">
      <div className="row">
        <header>
          <h4>About us.</h4>
        </header>
      </div>
      <div className="row text-start">
        <p>
          Our company focuses on providing a safe and reliable way to automate
          and monitor your home. With the use of our products, you will find
          yourself at ease and relieved knowing that absolute and professional
          dedication is managing your home.
        </p>
        <p>
          For any issues or if you are in need of help, please do not hesistate
          to contact the support team from these points.
          <li>Phone: +353859999999 </li>
          <li> Email: bluemesalaboratories@bluemesa.org</li>
        </p>
        <p>
          For other queries or questions you may have, you can contact
          representitives at these points:
        </p>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Phone</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Fordon Greeman</td>
              <td>0899999999</td>
              <td>fgreeman@bluemesa.org</td>
            </tr>
            <tr>
              <td>Bob Calaghan</td>
              <td>0823794738</td>
              <td>bobc@bluemesa.org</td>
            </tr>
          </tbody>
        </table>
        <p>
          If you would like to leave any kind of feedback to improve our
          systems, team, or just have advice you would like to share please
          leave a <a href="/review">review!</a>
        </p>

        <small className="text-center">
          Copyright &copy; 2022 Blue Mesa Laboratories.
        </small>
      </div>
    </div>
  );
};

export default About;
