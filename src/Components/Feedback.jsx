import React, { useEffect, useState } from "react";
import "../Styles/Feedback.css";
import cow1 from "../Images/cow1.png";

const translations = {
  en: {
    profileTitle: "Pashu Mitra",
    profileSubtitle: "AI Powered Pashu Scan",
    questionText: "How was your experience with “Pashu Mitra”??",
    ratingTitle: "Your overall rating",
    reviewLabel: "Add detailed review",
    reviewPlaceholder: "Enter your text here"
  },
  hi: {
    profileTitle: "पशु मित्र",
    profileSubtitle: "एआई संचालित पशु स्कैन",
    questionText: "आपका 'पशु मित्र' के साथ अनुभव कैसा रहा?",
    ratingTitle: "आपकी समग्र रेटिंग",
    reviewLabel: "विस्तृत समीक्षा जोड़ें",
    reviewPlaceholder: "अपना टेक्स्ट यहाँ दर्ज करें"
  }
};

const Feedback = () => {
  const [language, setLanguage] = useState(localStorage.getItem('lang') || 'en');
  const [rating, setRating] = useState(0);

  useEffect(() => {
    localStorage.setItem('lang', language);
  }, [language]);

  return (
    <div className="main-container">
      <div className="profile-card">
        <div className="header">
          <div className="profile-image"></div>
        </div>
        <div className="profile-content">
          <h2>{translations[language].profileTitle}</h2>
          <p>{translations[language].profileSubtitle}</p>

          <div className="question">{translations[language].questionText}</div>

          <div className="rating">
            <div className="rating-title">{translations[language].ratingTitle}</div>
            <div className="rating-star">
              {[1,2,3,4,5].map((star) => (
                <span
                  key={star}
                  className={star <= rating ? "active" : ""}
                  onClick={() => setRating(star)}
                >
                  &#9733;
                </span>
              ))}
            </div>
          </div>

          <div className="review-container">
            <label htmlFor="review"><strong>{translations[language].reviewLabel}</strong></label><br/>
            <textarea
              id="review"
              placeholder={translations[language].reviewPlaceholder}
            ></textarea>
          </div>
        </div>
      </div>

      <div className="image-container">
        <img src={cow1} alt="Cow" />
      </div>
    </div>
  );
};

export default Feedback;
