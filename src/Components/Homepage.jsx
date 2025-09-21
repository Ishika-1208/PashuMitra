import React from "react";
import "../Styles/Homepage.css";
import Globe from "../Images/Globe.png";
import Person from "../Images/Person.png";
import missionicon from "../Images/missionicon.png";
import camera from "../Images/camera.png";
import AddImage from "../Images/AddImage.png";
import featureicon from "../Images/featureicon.png";

function Homepage() {
  return (
    <div className="app">
      {/* Navbar */}
      <header className="navbar">
        <h1 className="logo">PashuScan</h1>
        <nav>
           <a href="#home">Home</a>  
          <a href="#AboutUs">About Us</a>
          <a href="#scan">Scan</a>
          <a href="#features">Features</a>
          <a href="#ContactUs">Contact Us</a>
        </nav>
        <div className="icons">
  <a href="#" className="lang"><img src={Globe} alt="lang" /></a>
  <a href="#" className="profile"><img src={Person} alt="profile" /></a>
</div>
      </header>

      {/* Hero Section */}
     <section className="hero">
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
<section id="mission" className="mission">
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
<section id="scan" className="scan">
  <h3>Scanning Cattles</h3>
  <div className="scan-buttons">
    {/* Scan cattle box */}
    <div className="scan-card">
      <img src={camera} alt="Scan Cattle" className="scan-icon" />
      <button>Scan Cattle</button>
      <p>Scan your cattle to identify the breed</p>
    </div>

    {/* Upload image box */}
    <div className="scan-card">
      <img src={AddImage} alt="Upload Image" className="scan-icon" />
      <button>Upload Image</button>
      <p>Upload image to identify the breed</p>
    </div>
  </div>
</section>

     {/* Special Features Section */}
<section id="features" className="features">
  <h3>Our Special Features</h3>
  <div className="features-grid">

    {/* Feature 1 */}
    <div className="feature-card">
      <img src={featureicon} alt="Popular Breeds" className="feature-icon" />
      <h4>Popular Breeds</h4>
      <p>Provides the detailed information about the breeds.</p>
      <a href="#">View more →</a>
    </div>

    {/* Feature 2 */}
    <div className="feature-card">
      <img src={featureicon} alt="ROI" className="feature-icon" />
      <h4>ROI</h4>
      <p>Provides the detailed information about the breeds.</p>
      <a href="#">View more →</a>
    </div>

    {/* Feature 3 */}
    <div className="feature-card">
      <img src={featureicon} alt="Blogs and Articles" className="feature-icon" />
      <h4>Blogs and Articles</h4>
      <p>Provides the detailed information about the breeds.</p>
      <a href="#">View more →</a>
    </div>

    {/* Feature 4 */}
    <div className="feature-card">
      <img src={featureicon} alt="Expert Care" className="feature-icon" />
      <h4>Expert Care</h4>
      <p>Provides the detailed information about the breeds.</p>
      <a href="#">View more →</a>
    </div>

    {/* Feature 5 */}
    <div className="feature-card">
      <img src={featureicon} alt="Comparison" className="feature-icon" />
      <h4>Comparison</h4>
      <p>Provides the detailed information about the breeds.</p>
      <a href="#">View more →</a>
    </div>

  </div>
</section>


      {/* Feedback Section */}
     <section id="feedback" className="feedback-section">
  <div className="container">
    <h2 className="section-title">What Our Users Say</h2>
    <div className="feedback-grid">
      <div className="feedback-card">
        <strong>- Rahul Kumar</strong>
        <p>"From scanning to valuable insights, PashuScan has made cattle care easier for me."</p>
      </div>
      <div className="feedback-card">
         <strong>- Aishwarya</strong>
        <p>"The breed identification is accurate and fast. Highly recommend to farmers!"</p>
      </div>
      <div className="feedback-card">
         <strong>- Arvind</strong>
        <p>"A must-have tool for farmers. It connects us with experts easily."</p>
      </div>
    </div>
  </div>
</section>


      {/* Footer */}
      <footer className="footer">
        <p>© 2025 PashuScan. All rights reserved.</p>
        <div>
          <a href="#privacy">Privacy</a> | <a href="#terms">Terms</a> |{" "}
          <a href="#contact">Contact</a>
        </div>
      </footer>
    </div>
  );
}

export default Homepage;
