import React from "react";
import { Link } from "react-router-dom";

function JobPortal() {
  return (
    <div>
      <h1 className="jobPortal">Job Portal</h1>
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

export default JobPortal;
