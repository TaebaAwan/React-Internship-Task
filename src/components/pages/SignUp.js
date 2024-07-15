import React, { useState } from "react";
import { collection } from "@firebase/firestore";
import "../../components/Form.css";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { getFirestore } from "firebase/firestore";
import "../Profile.css";

function SignUp() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    course: "",
  });

  const db = getFirestore();
  const ref = collection(db, "userData");

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const navigate = useNavigate();

  const handleSignUp = async (event) => {
    event.preventDefault();
    try {
      await axios
        .post(
          `http://127.0.0.1:5001/internee-b088e/us-central1/app/api/create/`,
          {
            name: formData.name,
            email: formData.email,
            password: formData.password,
            course: formData.course,
            phone: formData.phone,
          }
        )
        .then((response) => {
          console.log("User is created successfully:", response.data.id);
        })
        .catch((error) => {
          console.error("Error creating user data:", error);
        });

      alert("User Registered Successful");
      navigate("/interneeLogin");
    } catch (e) {
      console.log(e);
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
        <form className="form">
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
          <select
            id="course"
            name="course"
            value={formData.course}
            className="inputField"
            onChange={handleChange}
            required
          >
            <option value="" disabled>
              Select a course
            </option>
            <option value="Frontend Development">Frontend Development</option>
            <option value="Backend Development">Backend Development</option>
            <option value="Python Development">Python Development</option>
            <option value="Cyber Security">Cyber Security</option>
            <option value="Cloud Computing">Cloud Computing</option>
            <option value="UI/UX">UI/UX</option>
            <option value="Chatbot Development">Chatbot Development</option>
          </select>
          <br />
          <button type="submit" className="submit-btn" onClick={handleSignUp}>
            Register
          </button>
        </form>
        <p>
          Already have an account?<Link to="/interneeLogin">Login</Link>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
