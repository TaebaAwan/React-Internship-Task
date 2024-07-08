import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { logIn, logOut } from "../../redux/slices/authSlice";
import { Link } from "react-router-dom";

function Profile() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>You're Logged in!</h1>
      <h1>Name:</h1>
      <h1>Email:</h1>
      <button
        type="submit"
        className="btn-login"
        onClick={() => dispatch(logOut())}
      >
        {" "}
        <Link to="/" className="btn-text">
          Log Out
        </Link>
      </button>
    </div>
  );
}

export default Profile;
