import React from "react";
import "../Styles/Profile.css";
import cow1 from "../Images/cow1.png";
import cowicon from "../Images/cowicon.jpg";

const Profile = () => {
  // Handlers for actions
  const editProfile = () => {
    alert("Edit Profile clicked");
  };

  const changePassword = () => {
    alert("Change Password clicked");
  };

  const uploadPicture = () => {
    alert("Upload Profile Picture clicked");
  };

  const openNotifications = () => {
    alert("Notifications clicked");
  };

  const feedback = () => {
    window.location.href = "feedback.html";
  };

  const logout = () => {
    const confirmLogout = window.confirm("Are you sure you want to logout?");
    if (confirmLogout) {
      alert("Logged out!");
    }
  };

  return (
    <div className="main-container">
      {/* Profile Section */}
      <div className="profile-container">
        <div className="profile-header">
          <img src={cowicon} alt="Profile Icon" className="profile-icon" />
          <h2>John Doe</h2>
          <p>johndoe@example.com</p>
        </div>

        <div className="profile-actions">
          <div className="profile-button" onClick={editProfile}>
            <span className="icon">✏️</span> Edit Profile
          </div>
          <div className="profile-button" onClick={changePassword}>
            <span className="icon">🔒</span> Change Password
          </div>
          <div className="profile-button" onClick={uploadPicture}>
            <span className="icon">📷</span> Upload Profile Picture
          </div>
          <div className="profile-button" onClick={openNotifications}>
            <span className="icon">🔔</span> Notifications
          </div>
          <div className="profile-button" onClick={feedback}>
            <span className="icon">📝</span> Feedback
          </div>
          <div className="profile-button logout" onClick={logout}>
            <span className="icon">↩️</span> Logout
          </div>
        </div>
      </div>

      {/* Cow Image Section */}
      <div className="image-container">
        <img src={cow1} alt="Cow" />
      </div>
    </div>
  );
};

export default Profile;
