import React, { useState } from "react";
import { auth } from "../../../src/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import "../../components/Form.css";

import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { logIn, logOut } from '../../redux/slices/authSlice'

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );
      console.log("User Signed In:", userCredential.user);
      alert("Login Successful");
      // window.location.href = "/";
      navigate('/');
      dispatch(logIn());
    } catch (error) {
      if (
        (error.code === "auth/user-not-found" ||
          error.code === "auth/wrong-password",
        error)
      ) {
        console.error("Invalid Credentials");
        alert(
          "Either the user is not registered! Or the password is incorrect"
        );
      } else {
        console.error("Error logging in:", error);
        alert("An error occurred. Please try again later.");
      }
    }
  };
  const navigate = useNavigate();

  const isLoggedIn = useSelector(state => state.auth.isLoggedIn); 
  const dispatch = useDispatch()

  return (
    <div className="form-tab">
      <form onSubmit={handleSubmit} className="form">
        <h2 className="title-heading">Login Form</h2>
        <br />
        <label htmlFor="email" className="input-heading">
          Email:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="inputField"
          required
        />
        <br />
        <label htmlFor="password" className="input-heading">
          Password:
        </label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className="inputField"
          required
        />
        <br />
        <button type="submit" className="submit-btn" >Login</button>
      </form>
      <p>
        Don't have an account?<a href="/interneeSignUp"> SignUp </a>
      </p>
      <p>
        Forgot Password?<a href="/forgotPassword"> Reset Password </a>
      </p>
    </div>
  );
}

export default Login;
