import React, { useContext } from "react";
import "../Styles/LanguageSelector.css";
import { LanguageContext } from "./LanguageContext";

const languages = [
  { code: "en", label: "English" },
  { code: "hi", label: "हिन्दी (Hindi)" },
  { code: "gu", label: "ગુજરાતી (Gujarati)" },
  { code: "ml", label: "മലയാളം (Malayalam)" },
  { code: "bn", label: "বাংলা (Bengali)" },
  { code: "mr", label: "मराठी (Marathi)" },
  { code: "ta", label: "தமிழ் (Tamil)" },
  { code: "te", label: "తెలుగు (Telugu)" },
  { code: "kn", label: "ಕನ್ನಡ (Kannada)" },
];

const LanguageSelector = ({ onClose }) => {
  const { language, setLanguage } = useContext(LanguageContext);

  const handleLanguageChange = (langCode) => {
    setLanguage(langCode); // updates context + localStorage globally
    if (onClose) onClose();
  };

  return (
    <div className="language-container">
      <div className="language-header">
        <h2>Choose a language to make your experience better!</h2>
      </div>

      <ul className="language-list">
        {languages.map((lang) => (
          <li
            key={lang.code}
            className={language === lang.code ? "active" : ""}
            onClick={() => handleLanguageChange(lang.code)}
          >
            {lang.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LanguageSelector;
