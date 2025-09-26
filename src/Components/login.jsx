import React, { useEffect, useState } from "react";
import "../Styles/login.css";
import cow1 from "../Images/cow1.png";
import cowicon from "../Images/cowicon.jpg";
import { useNavigate } from "react-router-dom"; 

const Login = () => {
  const translations = {
    en: {
      title: "AI Cattle Scan",
      emailPlaceholder: "Email",
      passwordPlaceholder: "Password",
      loginButton: "Login",
      signupText: "Don’t have an account? <a href='/signup'>Sign Up</a>",
      errorEmpty: "Please fill out all fields.",
      errorInvalidEmail: "Please enter a valid email address.",
    },
    hi: {
      title: "एआई कैटल स्कैन",
      emailPlaceholder: "ईमेल",
      passwordPlaceholder: "पासवर्ड",
      loginButton: "लॉगिन",
      signupText: "खाता नहीं है? <a href='/signup'>साइन अप करें</a>",
      errorEmpty: "कृपया सभी फ़ील्ड भरें।",
      errorInvalidEmail: "कृपया एक वैध ईमेल पता दर्ज करें।",
    },
  };
   
    const navigate = useNavigate();

  const [currentLanguage, setCurrentLanguage] = useState(
    localStorage.getItem("lang") || "en"
  );
  const [form, setForm] = useState({ email: "", password: "" });
  const [errorMsg, setErrorMsg] = useState("");

  const setLanguage = (lang) => {
    setCurrentLanguage(lang);
    localStorage.setItem("lang", lang);
    setErrorMsg("");
  };

  useEffect(() => {
    setLanguage(currentLanguage);
    // eslint-disable-next-line
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = form;

    if (!email || !password) {
      setErrorMsg(translations[currentLanguage].errorEmpty);
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setErrorMsg(translations[currentLanguage].errorInvalidEmail);
      return;
    }

    setErrorMsg("");
    alert(`${translations[currentLanguage].loginButton} successful!\n${email}`);

    setForm({ email: "", password: "" });

    // Redirect directly to homepage (no role check)
     navigate("/Homepage");
  };

  return (
    <div className="login-body">
      <div className="main-container">
        <div className="form-container">
          {/* Language Switcher */}
          <div className="language-switcher">
            <button onClick={() => setLanguage("en")}>English</button>
            <button onClick={() => setLanguage("hi")}>हिन्दी</button>
          </div>

          <div className="logo">
            <img src={cowicon} alt="AI Cattle Scan Logo" />
          </div>
          <h1 id="title">{translations[currentLanguage].title}</h1>

          <form id="loginForm" onSubmit={handleSubmit}>
            <div className="input-container">
              <i className="fa fa-envelope icon"></i>
              <input
                type="email"
                id="email"
                placeholder={translations[currentLanguage].emailPlaceholder}
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-container">
              <i className="fa fa-lock icon"></i>
              <input
                type="password"
                id="password"
                placeholder={translations[currentLanguage].passwordPlaceholder}
                value={form.password}
                onChange={handleChange}
                required
              />
            </div>

            <div className="error">{errorMsg}</div>

            <button type="submit" id="loginBtn">
              {translations[currentLanguage].loginButton}
            </button>
          </form>

          <div
            className="signup-text"
            dangerouslySetInnerHTML={{
              __html: translations[currentLanguage].signupText,
            }}
          ></div>
        </div>

        <div className="image-container">
          <img src={cow1} alt="Decorative" />
        </div>
      </div>
    </div>
  );
};

export default Login;
