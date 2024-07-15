import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import "../Profile.css";
import {
  logIn,
  logOut,
  setUserEmail,
  setUserId,
} from "../../redux/slices/authSlice";

const Profile = () => {
  const userId = useSelector((state) => state.auth.userId);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const [fetchedData, setFetchedData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    course: "",
  });

  const [updateData, setUpdateData] = useState({
    name: "",
    password: "",
    course: "",
    phone: "",
  });

  const handleUpdateUserData = async (event) => {
    event.preventDefault();
    try {
      await axios
        .put(
          `http://127.0.0.1:5001/internee-b088e/us-central1/app/api/update/${userId}`,
          {
            name: updateData.name,
            password: updateData.password,
            course: updateData.course,
            phone: updateData.phone,
          }
        )
        .then((response) => {
          console.log("User updated successfully:", response.data);
        })
        .catch((error) => {
          console.error("Error updating user data:", error);
        });
      alert("User Updated Successful");
    } catch (e) {
      console.log(e);
    }
  };

  const handleDeleteUserData = async (event) => {
    event.preventDefault();
    try {
      await axios
        .delete(
          `http://127.0.0.1:5001/internee-b088e/us-central1/app/api/delete/${userId}`
        )
        .then(() => {
          console.log("User deleted successfully:");
        })
        .catch((error) => {
          console.error("Error deleting user data:", error);
        });
      alert("User Deleted Successful");
    } catch (e) {
      console.log(e);
    }
  };

  const handleInputChange = (id, value) => {
    setUpdateData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://127.0.0.1:5001/internee-b088e/us-central1/app/api/userDetail/${userId}`
        );
        setFetchedData(response.data);
      } catch (error) {
        console.error("Error fetching user details:", error);
      }
    };

    fetchData();
  }, [userId]);

  const handleLogOut = async (event) => {
    event.preventDefault();

    alert("LogOut Successful");
    navigate("/");
    dispatch(logOut());
  };
  return (
    <div>
      <div className="headerOfProfilePage">
        <div className="goBack-btn">
          <Link to="/" className="btn-text">
            <button type="submit" className="submit-btn">
              <i className="bi bi-arrow-left"></i>Home Page
            </button>
          </Link>{" "}
        </div>
        <div className="profilePageHeading">
          <h1 className="main-heading">User Profile</h1>
        </div>
        <div className="goBack-btn2">
          <button type="submit" className="submit-btn" onClick={handleLogOut}>
            Log Out
          </button>
        </div>
      </div>
      <div className="userInfo">
        <div className="column1">
          <p>Name:</p>
          <p>Email:</p>
          <p>Password:</p>
          <p>Course: </p>
          <p>Phone #:</p>
        </div>
        <div className="column2">
          <p>{fetchedData.name}</p>
          <p>{fetchedData.email}</p>
          <p>{fetchedData.password}</p>
          <p>{fetchedData.course} </p>
          <p> {fetchedData.phone}</p>
        </div>
      </div>

      <div>
        <div className="form-tab">
          <h2 className="title-heading">Update User Information</h2>
          <form className="form formButtons">
            <div className="column2">
              <label htmlFor="name" className="input-heading">
                Name:
              </label>
              <input
                onChange={(event) =>
                  handleInputChange(event.target.id, event.target.value)
                }
                type="text"
                id="name"
                value={updateData.name}
                className="inputField"
              />
              <br />
              <label htmlFor="phone" className="input-heading">
                Phone Number:
              </label>
              <input
                onChange={(event) =>
                  handleInputChange(event.target.id, event.target.value)
                }
                type="tel"
                id="phone"
                value={updateData.phone}
                className="inputField"
              />
              <br />
            </div>
            <div className="column2">
              <label htmlFor="password" className="input-heading">
                Password:
              </label>
              <input
                onChange={(event) =>
                  handleInputChange(event.target.id, event.target.value)
                }
                type="text"
                id="password"
                value={updateData.password}
                className="inputField"
              />
              <br />
              <label htmlFor="course" className="input-heading">
                Course:
              </label>
              <select
                id="course"
                value={updateData.course}
                className="inputField"
                onChange={(event) =>
                  handleInputChange(event.target.id, event.target.value)
                }
              >
                <option value="" disabled>
                  Select a course
                </option>
                <option value="Frontend Development">
                  Frontend Development
                </option>
                <option value="Backend Development">Backend Development</option>
                <option value="Python Development">Python Development</option>
                <option value="Cyber Security">Cyber Security</option>
                <option value="Cloud Computing">Cloud Computing</option>
                <option value="UI/UX">UI/UX</option>
                <option value="Chatbot Development">Chatbot Development</option>
              </select>
              <br />
            </div>
          </form>
          <div className="updateAndDeleteButtons">
            <button
              type="submit"
              className="Delete-btn"
              onClick={handleDeleteUserData}
            >
              Delete Account
            </button>
            <button
              type="submit"
              className="submit-btn"
              onClick={handleUpdateUserData}
            >
              Update Info
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
