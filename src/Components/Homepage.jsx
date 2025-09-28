import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../Styles/Homepage.css";
import Person from "../Images/Person.png";
import missionicon from "../Images/missionicon.png";
import cowicon from "../Images/cowicon.jpg";
import headerbackground from "../Images/headerbackground.png";
import featureicon from "../Images/featureicon.png";
import feedbackprofile from "../Images/feedbackprofile.png";
import qrCode from "../Images/qrcode.jpg";
import Chatbot from "./Chatbot";

const translations = {
  en: {
    heroTitle: "Know The Breed Of Your Cattles",
    heroSubtitle:
      "From houseplants to outdoor gardens we provide comprehensive guides, expert articles and practical tips to help your plants thrive in any environment.",
    missionTitle: "Our Mission",
    missionText:
      "At PashuScan, we’re dedicated to guiding you on breed identification journey with expert assistance and personalized education.",
    missionStats: [
      { value: "2500+", label: "Cattle Scanned" },
      { value: "1500+", label: "Farmers Helped" },
      { value: "500+", label: "Experts" },
      { value: "200+", label: "Villages Reached" },
    ],
    scanTitle: "Expand your livestock knowledge.",
    scanText:
      "AI-powered breed identification, identify any breed in an instant. Scan the QR code to download the app.",
    scanBtn: "SCAN ME",
    featuresTitle: "Our Unique Features",
    features: [
      { title: "Popular Breeds", desc: "Provides detailed info about the breeds.", link: "/CattleBreeds" },
      { title: "ROI", desc: "Provides ROI calculation for your cattle.", link: "/RoiCalculator" },
      { title: "Blogs and Articles", desc: "Provides detailed info about the breeds.", link: "/ArticlesPage" },
      { title: "Expert Care", desc: "Provides expert guidance for cattle care.", link: "#features" },
      { title: "Comparison", desc: "Compare different cattle breeds easily.", link: "#features" },
    ],
    viewMore: "View more →",
    feedbackTitle: "Feedback",
    footer: {
      brand: "PashuScan",
      brandDesc: "Your reliable gateway to the world and amazing hidden adventures.",
      pageLinksTitle: "Our Page",
      links: ["Home", "About Us", "Scan", "Features", "Contact Us"],
      contactTitle: "Contact Us",
      contact: ["📍 Ghaziabad", "📞 (+91) 1234 567 890", "📧 pashuscan@gmail.com"],
      copyright: "© 2025 PashuScan. All rights reserved.",
    },
    feedbackCards: [
      {
        name: "Rahul Kumar",
        text: "From scanning to valuable insights, PashuScan has made cattle care easier for me.",
      },
      {
        name: "Aishwarya",
        text: "The breed identification is accurate and fast. Highly recommend to farmers!",
      },
      {
        name: "Arvind",
        text: "A must-have tool for farmers. It connects us with experts easily.",
      },
    ],
  },
  hi: {
    heroTitle: "अपनी गायों की नस्ल जानें",
    heroSubtitle:
      "हम आपको विस्तृत गाइड, विशेषज्ञ लेख और व्यावहारिक टिप्स प्रदान करते हैं ताकि आपकी गायें और पशु अच्छी तरह से विकसित हो सकें।",
    missionTitle: "हमारा मिशन",
    missionText:
      "PashuScan में, हम आपको नस्ल पहचान की यात्रा में विशेषज्ञ सहायता और व्यक्तिगत शिक्षा प्रदान करने के लिए समर्पित हैं।",
    missionStats: [
      { value: "2500+", label: "गायों की जाँच की गई" },
      { value: "1500+", label: "किसानों की मदद की" },
      { value: "500+", label: "विशेषज्ञ" },
      { value: "200+", label: "गांवों तक पहुंचा" },
    ],
    scanTitle: "अपने पशुधन का ज्ञान बढ़ाएं।",
    scanText:
      "AI-पावर्ड नस्ल पहचान, किसी भी नस्ल को तुरंत पहचानें। ऐप डाउनलोड करने के लिए QR कोड स्कैन करें।",
    scanBtn: "स्कैन करें",
    featuresTitle: "हमारी अनोखी विशेषताएं",
    features: [
      { title: "लोकप्रिय नस्लें", desc: "नस्लों के बारे में विस्तृत जानकारी प्रदान करता है।", link: "/CattleBreeds" },
      { title: "ROI", desc: "आपकी गायों के लिए ROI की गणना प्रदान करता है।", link: "/RoiCalculator" },
      { title: "ब्लॉग और लेख", desc: "नस्लों के बारे में विस्तृत जानकारी प्रदान करता है।", link: "/ArticlesPage" },
      { title: "विशेषज्ञ देखभाल", desc: "गायों की देखभाल के लिए विशेषज्ञ मार्गदर्शन प्रदान करता है।", link: "#features" },
      { title: "तुलना", desc: "विभिन्न नस्लों की तुलना आसानी से करें।", link: "#features" },
    ],
    viewMore: "और देखें →",
    feedbackTitle: "प्रतिक्रिया",
    footer: {
      brand: "PashuScan",
      brandDesc: "आपके विश्व और अद्भुत छिपी हुई यात्रा का विश्वसनीय प्रवेश द्वार।",
      pageLinksTitle: "हमारा पेज",
      links: ["होम", "हमारे बारे में", "स्कैन", "विशेषताएँ", "संपर्क करें"],
      contactTitle: "संपर्क करें",
      contact: ["📍 गाज़ियाबाद", "📞 (+91) 1234 567 890", "📧 pashuscan@gmail.com"],
      copyright: "© 2025 PashuScan. सर्वाधिकार सुरक्षित।",
    },
    feedbackCards: [
      {
        name: "राहुल कुमार",
        text: "स्कैनिंग से लेकर मूल्यवान जानकारी तक, PashuScan ने मेरे लिए गायों की देखभाल आसान बना दी।",
      },
      {
        name: "ऐश्वर्या",
        text: "नस्ल पहचान सटीक और तेज़ है। किसानों को अत्यधिक अनुशंसित!",
      },
      {
        name: "अर्विंद",
        text: "किसानों के लिए एक जरूरी उपकरण। यह हमें विशेषज्ञों से आसानी से जोड़ता है।",
      },
    ],
  },
};

function Homepage() {
  const [lang, setLang] = useState("en");
  useEffect(() => {
    const savedLang = localStorage.getItem("lang");
    if (savedLang && (savedLang === "en" || savedLang === "hi")) setLang(savedLang);
  }, []);

  const t = translations[lang];

  return (
    <div className="app">
      {/* Hero Section */}
      <section className="hero" id="hero" style={{ backgroundImage: `url(${headerbackground})` }}>
        <div className="overlay"></div>
        <div className="hero-text">
          <h2>{t.heroTitle}</h2>
          <h6>{t.heroSubtitle}</h6>
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission" className="mission">
        <h3>{t.missionTitle}</h3>
        <p>{t.missionText}</p>
        <div className="mission-container">
          <div className="mission-grid">
            {t.missionStats.map((stat, idx) => (
              <div key={idx}>
                <h4>{stat.value} {stat.label}</h4>
                <p>{t.heroSubtitle}</p>
              </div>
            ))}
          </div>
          <div className="mission-image">
            <img src={missionicon} alt="Mission" />
          </div>
        </div>
      </section>

      {/* Scan Section */}
      <section id="scan" className="scan">
        <div className="scan-container">
          <div className="scan-text">
            <h2>{t.scanTitle}</h2>
            <p>{t.scanText}</p>
          </div>
          <div className="scan-card">
            <img src={qrCode} alt="QR Code" className="qr-image" />
            <button className="scan-btn">{t.scanBtn}</button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features">
        <h3>{t.featuresTitle}</h3>
        <div className="features-grid">
          {t.features.map((feat, idx) => (
            <div className="feature-card" key={idx}>
              <img src={featureicon} alt={feat.title} className="feature-icon" />
              <h4>{feat.title}</h4>
              <p>{feat.desc}</p>
              <Link to={feat.link}>{t.viewMore}</Link>
            </div>
          ))}
        </div>
      </section>

      {/* Feedback Section */}
      <section id="feedback" className="feedback-section">
        <div className="container">
          <h2 className="section-title">{t.feedbackTitle}</h2>
          <div className="feedback-grid">
            {t.feedbackCards.map((fb, idx) => (
              <div className="feedback-card" key={idx}>
                <div className="feedback-profile">
                  <img src={feedbackprofile} alt={fb.name} className="feedback-img" />
                  <div>
                    <h3 className="feedback-name">{fb.name}</h3>
                    <div className="feedback-stars">★★★★★</div>
                  </div>
                </div>
                <p>{fb.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer" id="footer">
        <div className="footer-container">
          <div className="footer-col">
            <h3 className="footer-logo">{t.footer.brand}</h3>
            <p>{t.footer.brandDesc}</p>
          </div>
          <div className="footer-col">
            <h4>{t.footer.pageLinksTitle}</h4>
            <ul>
              {t.footer.links.map((link, idx) => (<li key={idx}><p>{link}</p></li>))}
            </ul>
          </div>
          <div className="footer-col">
            <h4>{t.footer.contactTitle}</h4>
            {t.footer.contact.map((c, idx) => (<p key={idx}>{c}</p>))}
          </div>
        </div>
        <div className="footer-bottom">
          <p>{t.footer.copyright}</p>
        </div>
      </footer>

      <Chatbot />
    </div>
  );
}

export default Homepage;
