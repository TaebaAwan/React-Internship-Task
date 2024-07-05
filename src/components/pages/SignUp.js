import React, { useState } from "react";
import { firestore, auth } from "../../../src/firebase";
import { addDoc, collection } from "@firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";
import "../../components/Form.css";

function SignUp() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    course: "",
  });

  const ref = collection(firestore, "userData");

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    try {
      addDoc(ref, formData);
      createUserWithEmailAndPassword(auth, formData.email, formData.password);
      console.log("User Added!");
    } catch (e) {
      console.log(e);
    }

    console.log("Form Submitted:", formData);
    setFormData({
      name: "",
      email: "",
      phone: "",
      password: "",
      course: "",
    });
  };

  return (
    <div className="form-tab">
      <form onSubmit={handleSubmit} className="form">
        <h2 className="title-heading">Sign Up Form</h2>
        <label htmlFor="name" className="input-heading">
          Name:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="inputField"
          required
        />
        <br />
        <label htmlFor="email" className="input-heading">
          Email:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          className="inputField"
          onChange={handleChange}
          required
        />
        <br />
        <label htmlFor="phone" className="input-heading">
          Phone Number:
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          className="inputField"
          onChange={handleChange}
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
          className="inputField"
          onChange={handleChange}
          required
        />
        <br />
        <label htmlFor="course" className="input-heading">
          Course:
        </label>
        <input
          type="text"
          id="course"
          name="course"
          value={formData.course}
          className="inputField"
          onChange={handleChange}
          required
        />
        <br />
        <button type="submit" className="submit-btn">
          Register
        </button>
      </form>
      <p>
        Already have an account?<a href="/interneeLogin">Login</a>
      </p>
    </div>
  );
}

export default SignUp;
