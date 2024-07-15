import React, { useState } from "react";
import { auth } from "../../../src/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import "../../components/Form.css";
import { getFirestore } from "firebase/firestore";
import { getDocs, where, collection, query } from "@firebase/firestore";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  logIn,
  logOut,
  setUserEmail,
  setUserId,
} from "../../redux/slices/authSlice";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const db = getFirestore();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );
      const uniqueId = userCredential.user.uid;
      const q = query(collection(db, "userData"), where("uid", "==", uniqueId));
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        const doc = querySnapshot.docs[0];
        console.log(doc);
        dispatch(setUserId(doc.id));
      } else {
        console.log("No such document!");
      }
      console.log("User Logged In:");
      alert("Login Successful");
      navigate("/");
      dispatch(logIn());
      dispatch(setUserEmail(formData.email));
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

  return (
    <div>
      <div className="goBack-btn">
        <Link to="/" className="btn-text">
          <button type="submit" className="submit-btn">
            <i className="bi bi-arrow-left"></i>Home Page
          </button>
        </Link>{" "}
      </div>
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
          <button type="submit" className="submit-btn">
            Login
          </button>
        </form>
        <p>
          Don't have an account?<Link to="/interneeSignUp">SignUp</Link>
        </p>
        <p>
          Forgot Password?<Link to="/forgotPassword">Reset Password</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
