import React, { useState, useEffect } from "react";
import "../Styles/Signup.css"; // Make sure the path is correct
import cowIcon from "../Images/cowicon.jpg";
import cowImage from "../Images/cow1.png";

const translations = {
  en: {
    title: "AI Cattle Scan",
    emailPlaceholder: "Email",
    passwordPlaceholder: "Password",
    confirmPasswordPlaceholder: "Confirm Password",
    signupButton: "Sign Up",
    signupText: "Already have an account? <a href='/'>Login</a>",
    errorEmpty: "Please fill out all fields.",
    errorInvalidEmail: "Please enter a valid email address.",
    errorPasswordShort: "Password must be at least 6 characters.",
    errorPasswordMismatch: "Passwords do not match."
  },
  hi: {
    title: "एआई कैटल स्कैन",
    emailPlaceholder: "ईमेल",
    passwordPlaceholder: "पासवर्ड",
    confirmPasswordPlaceholder: "पासवर्ड पुष्टि करें",
    signupButton: "साइन अप करें",
    signupText: "पहले से खाता है? <a href='/'>लॉगिन</a>",
    errorEmpty: "कृपया सभी फ़ील्ड भरें।",
    errorInvalidEmail: "कृपया एक वैध ईमेल पता दर्ज करें।",
    errorPasswordShort: "पासवर्ड कम से कम 6 अक्षरों का होना चाहिए।",
    errorPasswordMismatch: "पासवर्ड मेल नहीं खाते।"
  }
};

function Signup() {
  const [lang, setLang] = useState(localStorage.getItem("lang") || "en");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    localStorage.setItem("lang", lang);
  }, [lang]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMsg("");

    if (!email || !password || !confirmPassword) {
      setErrorMsg(translations[lang].errorEmpty);
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setErrorMsg(translations[lang].errorInvalidEmail);
      return;
    }

    if (password.length < 6) {
      setErrorMsg(translations[lang].errorPasswordShort);
      return;
    }

    if (password !== confirmPassword) {
      setErrorMsg(translations[lang].errorPasswordMismatch);
      return;
    }

    alert(`Sign Up successful!\nEmail: ${email}`);
    setEmail("");
    setPassword("");
    setConfirmPassword("");

    // Redirect to home/login page
    window.location.href = "/";
  };

  return (
    <div className="main-container">
      <div className="form-container">
        {/* Language Switcher */}
        <div className="language-switcher">
          <button onClick={() => setLang("en")}>English</button>
          <button onClick={() => setLang("hi")}>हिन्दी</button>
        </div>

        <div className="logo">
          <img src={cowIcon} alt="AI Cattle Scan Logo" />
        </div>
        <h1>{translations[lang].title}</h1>

        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <i className="fa fa-envelope icon"></i>
            <input
              type="email"
              placeholder={translations[lang].emailPlaceholder}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="input-container">
            <i className="fa fa-lock icon"></i>
            <input
              type="password"
              placeholder={translations[lang].passwordPlaceholder}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="input-container">
            <i className="fa fa-lock icon"></i>
            <input
              type="password"
              placeholder={translations[lang].confirmPasswordPlaceholder}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

          <div className="error">{errorMsg}</div>

          <button type="submit" id="loginBtn">
            {translations[lang].signupButton}
          </button>
        </form>

        <div
          className="signup-text"
          dangerouslySetInnerHTML={{ __html: translations[lang].signupText }}
        ></div>
      </div>

      <div className="image-container">
        <img src={cowImage} alt="Decorative" />
      </div>
    </div>
  );
}

export default Signup;
