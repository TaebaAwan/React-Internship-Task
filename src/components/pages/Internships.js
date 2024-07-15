import React from "react";
import { Link } from "react-router-dom";

function Internships() {
  return (
    <div>
      <h1 className="internships">Internships</h1>
      <div className="goBack-btn">
        <Link to="/" className="btn-text">
          <button type="submit" className="submit-btn">
            <i className="bi bi-arrow-left"></i>Home Page
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Internships;
