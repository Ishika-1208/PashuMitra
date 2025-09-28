import React, { useState, useEffect } from "react";
import "../Styles/Profile.css";
import cow1 from "../Images/cow1.png";
import cowicon from "../Images/cowicon.jpg";
import { useNavigate } from "react-router-dom";

const translations = {
  en: {
    name: "John Doe",
    email: "johndoe@example.com",
    editProfile: "Edit Profile",
    changePassword: "Change Password",
    uploadPicture: "Upload Profile Picture",
    notifications: "Notifications",
    feedback: "Feedback",
    logout: "Logout"
  },
  hi: {
    name: "जॉन डो",
    email: "johndoe@example.com",
    editProfile: "प्रोफ़ाइल संपादित करें",
    changePassword: "पासवर्ड बदलें",
    uploadPicture: "प्रोफ़ाइल चित्र अपलोड करें",
    notifications: "सूचनाएँ",
    feedback: "प्रतिक्रिया",
    logout: "लॉग आउट"
  }
};

const Profile = () => {
  const navigate = useNavigate(); 
  const [lang, setLang] = useState(localStorage.getItem("lang") || "en");

  useEffect(() => {
    localStorage.setItem("lang", lang);
  }, [lang]);

  // Handlers for actions
  const editProfile = () => alert("Edit Profile clicked");
  const changePassword = () => alert("Change Password clicked");
  const uploadPicture = () => alert("Upload Profile Picture clicked");
  const openNotifications = () => alert("Notifications clicked");
  const feedback = () => navigate("/Feedback");
  const logout = () => {
    if (window.confirm("Are you sure you want to logout?")) navigate("/");
  };

  return (
    <div className="profile-body">
      <div className="main-container">
        {/* Language Switcher */}
        <div className="language-switcher">
          <button onClick={() => setLang("en")}>English</button>
          <button onClick={() => setLang("hi")}>हिन्दी</button>
        </div>

        {/* Profile Section */}
        <div className="profile-container">
          <div className="profile-header">
            <img src={cowicon} alt="Profile Icon" className="profile-icon" />
            <h2>{translations[lang].name}</h2>
            <p>{translations[lang].email}</p>
          </div>

          <div className="profile-actions">
            <div className="profile-button" onClick={editProfile}>
              <span className="icon">✏️</span> {translations[lang].editProfile}
            </div>
            <div className="profile-button" onClick={changePassword}>
              <span className="icon">🔒</span> {translations[lang].changePassword}
            </div>
            <div className="profile-button" onClick={uploadPicture}>
              <span className="icon">📷</span> {translations[lang].uploadPicture}
            </div>
            <div className="profile-button" onClick={openNotifications}>
              <span className="icon">🔔</span> {translations[lang].notifications}
            </div>
            <div className="profile-button" onClick={feedback}>
              <span className="icon">📝</span> {translations[lang].feedback}
            </div>
            <div className="profile-button logout" onClick={logout}>
              <span className="icon">↩️</span> {translations[lang].logout}
            </div>
          </div>
        </div>

        {/* Cow Image Section */}
        <div className="image-container">
          <img src={cow1} alt="Cow" />
        </div>
      </div>
    </div>
  );
};

export default Profile;
