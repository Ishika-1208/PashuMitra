import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { scroller } from "react-scroll";
import "../Styles/Navbar.css";
import Language from "../Images/language.jpg";
import cowicon from "../Images/cowicon.jpg";
import Person from "../Images/Person.png";
import LanguageSelector from "./LanguageSelector"; // inline selector

const translations = {
  en: {
    home: "Home",
    about: "About Us",
    scan: "Scan",
    features: "Features",
    contact: "Contact Us",
  },
  hi: {
    home: "होम",
    about: "हमारे बारे में",
    scan: "स्कैन",
    features: "विशेषताएँ",
    contact: "संपर्क करें",
  },
};

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showLanguageSelector, setShowLanguageSelector] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState(
    localStorage.getItem("lang") || "en"
  );

  const location = useLocation();
  const navigate = useNavigate();
  const homepagePath = "/Homepage";

  // Scroll to section
  const handleScrollNavigation = (section) => {
    setMenuOpen(false);
    if (location.pathname === homepagePath) {
      scroller.scrollTo(section, {
        smooth: true,
        duration: 1000,
        offset: -80,
      });
    } else {
      navigate(homepagePath, { state: { scrollTo: section } });
    }
  };

  // Update current language if localStorage changes elsewhere
  useEffect(() => {
    const lang = localStorage.getItem("lang") || "en";
    setCurrentLanguage(lang);
  }, [location]);

  return (
    <header className="navbar">
      {/* Logo */}
      <div className="logo-container">
        <img className="logo-pic" src={cowicon} alt="logo" />
        <h1 className="logo">AI Powered PashuScan</h1>
      </div>

      {/* Hamburger */}
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Navigation */}
      <nav className={menuOpen ? "active" : ""}>
        <span onClick={() => handleScrollNavigation("hero")}>
          {translations[currentLanguage].home}
        </span>
        <span onClick={() => handleScrollNavigation("mission")}>
          {translations[currentLanguage].about}
        </span>
        <span onClick={() => handleScrollNavigation("scan")}>
          {translations[currentLanguage].scan}
        </span>
        <span onClick={() => handleScrollNavigation("features")}>
          {translations[currentLanguage].features}
        </span>
        <span onClick={() => handleScrollNavigation("footer")}>
          {translations[currentLanguage].contact}
        </span>
      </nav>

      {/* Icons */}
      <div className="icons">
        <img
          src={Language}
          alt="language"
          style={{ cursor: "pointer" }}
          onClick={() => setShowLanguageSelector(!showLanguageSelector)}
        />
        <Link to="/Profile">
          <img src={Person} alt="profile" />
        </Link>
      </div>

      {/* Inline Language Selector */}
      {showLanguageSelector && (
        <LanguageSelector
          onClose={() => setShowLanguageSelector(false)}
          onLanguageChange={(lang) => setCurrentLanguage(lang)}
        />
      )}
    </header>
  );
};

export default Navbar;
