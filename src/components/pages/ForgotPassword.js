import React, { useState } from "react";
import { auth } from "../../../src/firebase";
import { sendPasswordResetEmail } from "firebase/auth";
import "../../components/Form.css";

function ForgotPassword() {
  const [formData, setFormData] = useState({
    email: "",
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const resetPass = await sendPasswordResetEmail(auth, formData.email).then(
        alert("Reset Password link sent to your email. Please check email"),
        (window.location.href = "/interneeLogin")
      );
      console.log(
        "Reset Password link sent to your email. Please check email",
        resetPass
      );
    } catch (error) {
      if (error.code === "auth/invalid-email") {
        console.error("Invalid email format.");
        alert("Invalid email format. Please enter a valid email.");
      } else {
        console.error("Error logging in:", error);
        alert("An error occurred. Please try again later.");
      }
    }
  };

  return (
    <div className="form-tab">
      <form onSubmit={handleSubmit} className="form">
        <h2 className="title-heading">Reset Password </h2>
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
        <button type="submit" className="submit-btn">
          Reset
        </button>
        <br />
      </form>
    </div>
  );
}

export default ForgotPassword;
