import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import "../Styles/Homepage.css";
// import Globe from "../Images/Globe.png";
import Person from "../Images/Person.png";
import missionicon from "../Images/missionicon.png";
import cowicon from "../Images/cowicon.jpg";
import headerbackground from "../Images/headerbackground.png";
import featureicon from "../Images/featureicon.png";
import feedbackprofile from "../Images/feedbackprofile.png";
import qrCode from "../Images/qrcode.jpg";
import { Link as ScrollLink} from "react-scroll";

function Homepage() {
  return (
    <div className="app">
      {/* Navbar */}
      <header className="navbar">
        <div className="logo-container">
        <img className="logo-pic" src={cowicon} alt="logo"/>
        <h1 className="logo">PashuScan</h1>
        </div>
           <nav>
  <ScrollLink to="hero" smooth={true} duration={1000} offset={-80} spy={true}  activeClass="active">Home</ScrollLink>
  <ScrollLink to="mission" smooth={true} duration={1000} offset={-80} spy={true}  activeClass="active">About Us</ScrollLink>
  <ScrollLink to="scan" smooth={true} duration={1000} offset={-80} spy={true}  activeClass="active">Scan</ScrollLink>
  <ScrollLink to="features" smooth={true} duration={1000} offset={-80} spy={true}  activeClass="active">Features</ScrollLink>
  <ScrollLink to="footer" smooth={true} duration={1000} offset={-80} spy={true}  activeClass="active">Contact Us</ScrollLink>
</nav>

        <div className="icons">
  {/* <a to="#" className="lang"><img src={Globe} alt="lang" /></a> */}
  <Link to="/Profile" className="profile"><img src={Person} alt="profile" /></Link>
</div>
      </header>

      {/* Hero Section */}
     <section className="hero" id="hero" name="hero" style={{ backgroundImage: `url(${headerbackground})` }}>
  <div className="overlay"></div>
  <div className="hero-text">
    <h2>Know The Breed Of Your Cattles</h2>
    <h6>
      From houseplants to outdoor gardens we provide comprehensive guides,
      expert articles and practical tips to help your plants thrive in any environment.
    </h6>
  </div>
</section>


     {/* Mission Section */}
<section id="mission" className="mission" name="mission">
  <h3>Our Mission</h3>
  <p>
    At PashuScan, we’re dedicated to guiding you on breed identification
    journey with expert assistance and personalized education.
  </p>

  <div className="mission-container">
    {/* Stats Grid */}
    <div className="mission-grid">
      <div>
        <h4>2500+ Cattle Scanned</h4>
        <p>From houseplants to outdoor gardens we provide comprehensive guides, expert articles and practical tips to help your plants thrive in any environment.</p>
      </div>
      <div>
        <h4>1500+ Farmers Helped</h4>
        <p>From houseplants to outdoor gardens we provide comprehensive guides, expert articles and practical tips to help your plants thrive in any environment.</p>
      </div>
      <div>
        <h4>500+ Experts</h4>
        <p>From houseplants to outdoor gardens we provide comprehensive guides, expert articles and practical tips to help your plants thrive in any environment.</p>
      </div>
      <div>
        <h4>200+ Villages Reached</h4>
        <p>From houseplants to outdoor gardens we provide comprehensive guides, expert articles and practical tips to help your plants thrive in any environment.</p>
      </div>
    </div>

    {/* Image */}
    <div className="mission-image">
      <img src={missionicon} alt="Mission" />
    </div>
  </div>
</section>

     {/* Scanning Section */}
 <section id="scan" className="scan" name="scan">
      <div className="scan-container">
        
        {/* Left Side - Text */}
        <div className="scan-text">
          <h2>Expand your livestock<br/> knowledge.</h2>
          <p>
            AI-powered breed identification, identify any breed in an instant.<br/>
            Scan the QR code to download the app.
          </p>
        </div>

        {/* Right Side - QR Code Card */}
        <div className="scan-card">
          <img src={qrCode} alt="QR Code" className="qr-image" />
          <button className="scan-btn">SCAN ME</button>
        </div>

      </div>
    </section>

     {/* Special Features Section */}
<section id="features" className="features" name="features">
  <h3>Our Unique Features</h3>
  <div className="features-grid">

    {/* Feature 1 */}
    <div className="feature-card">
      <img src={featureicon} alt="Popular Breeds" className="feature-icon" />
      <h4>Popular Breeds</h4>
      <p>Provides the detailed information about the breeds.</p>
      <Link to="/CattleBreeds">View more →</Link>
    </div>

    {/* Feature 2 */}
    <div className="feature-card">
      <img src={featureicon} alt="ROI" className="feature-icon" />
      <h4>ROI</h4>
      <p>Provides the detailed information about the breeds.</p>
       <Link to="/RoiCalculator">View more →</Link>
    </div>

    {/* Feature 3 */}
    <div className="feature-card">
      <img src={featureicon} alt="Blogs and Articles" className="feature-icon" />
      <h4>Blogs and Articles</h4>
      <p>Provides the detailed information about the breeds.</p>
      <Link to="/ArticlesPage">View more →</Link>
    </div>

    {/* Feature 4 */}
    <div className="feature-card">
      <img src={featureicon} alt="Expert Care" className="feature-icon" />
      <h4>Expert Care</h4>
      <p>Provides the detailed information about the breeds.</p>
       <a href="#features">View more →</a>
    </div>

    {/* Feature 5 */}
    <div className="feature-card">
      <img src={featureicon} alt="Comparison" className="feature-icon" />
      <h4>Comparison</h4>
      <p>Provides the detailed information about the breeds.</p>
       <a href="#features">View more →</a>
    </div>

  </div>
</section>


     {/* Feedback Section */}
<section id="feedback" className="feedback-section" >
  <div className="container">
    <h2 className="section-title">Feedback</h2>
    <div className="feedback-grid">

      <div className="feedback-card">
        <div className="feedback-profile">
          <img src={feedbackprofile} alt="Rahul Kumar" className="feedback-img" />
          <div>
            <h3 className="feedback-name">Rahul Kumar</h3>
            <div className="feedback-stars">★★★★★</div>
          </div>
        </div>
        <p>
          From scanning to valuable insights, PashuScan has made cattle care easier for me.
        </p>
      </div>

      <div className="feedback-card">
        <div className="feedback-profile">
          <img src={feedbackprofile} alt="Aishwarya" className="feedback-img" />
          <div>
            <h3 className="feedback-name">Aishwarya</h3>
            <div className="feedback-stars">★★★★★</div>
          </div>
        </div>
        <p>
          The breed identification is accurate and fast. Highly recommend to farmers!
        </p>
      </div>

      <div className="feedback-card">
        <div className="feedback-profile">
          <img src={feedbackprofile} alt="Arvind" className="feedback-img" />
          <div>
            <h3 className="feedback-name">Arvind</h3>
            <div className="feedback-stars">★★★★★</div>
          </div>
        </div>
        <p>
          A must-have tool for farmers. It connects us with experts easily.
        </p>
      </div>

    </div>
  </div>
</section>


   {/* Footer */}
<footer className="footer" id="footer" name="footer">
  <div className="footer-container">
    {/* Left: Brand */}
    <div className="footer-col">
      <h3 className="footer-logo">PashuScan</h3>
      <p>Your reliable gateway to the<br/>
         world and amazing hidden <br/>
         adventures.</p>
    </div>

    {/* Middle: Links */}
    <div className="footer-col">
      <h4>Our Page</h4>
      <ul>
        <li><p href="#home">Home</p></li>
        <li><p href="#missin">About Us</p></li>
        <li><p href="#scan">Scan</p></li>
        <li><p href="#features">Features</p></li>
        <li><p href="#footer">Contact Us</p></li>
      </ul>
    </div>

    {/* Right: Contact */}
    <div className="footer-col">
      <h4>Contact Us</h4>
      <p>📍 Ghaziabad</p>
      <p>📞 (+91) 1234 567 890</p>
      <p>📧 pashuscan@gmail.com</p>
    </div>
  </div>

  {/* Bottom bar */}
  <div className="footer-bottom">
    <p>© 2025 PashuScan. All rights reserved.</p>
  </div>
</footer>

    
    </div>
  );
}

export default Homepage;