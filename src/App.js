
import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import Homepage from "./Components/Homepage";
import Login from "./Components/login";
import Signup from "./Components/Signup";
import RoiCalculator from "./Components/RoiCalculator";
import Chatbot from "./Components/Chatbot";
import BreedDetails from "./Components/BreedDetails";
import CattleBreeds from "./Components/CattleBreeds";
import Feedback from "./Components/Feedback";
import Profile from "./Components/Profile";
import ArticlesPage from "./Components/ArticlesPage";
import Navbar from "./Components/Navbar";
import LanguageSelector from "./Components/LanguageSelector";

// Import Language Context Provider
import { LanguageProvider } from "./Components/LanguageContext.jsx";

function AppWrapper() {
  const location = useLocation();

  // Routes where Navbar should be hidden
  const hideNavbarRoutes = ["/", "/signup", "/Language"];

  return (
    <>
      {!hideNavbarRoutes.includes(location.pathname) && <Navbar />}

      <Routes>
        <Route path="/Homepage" element={<Homepage />} />
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/RoiCalculator" element={<RoiCalculator />} />
        <Route path="/Chatbot" element={<Chatbot />} />
        <Route path="/BreedDetails" element={<BreedDetails />} />
        <Route path="/CattleBreeds" element={<CattleBreeds />} />
        <Route path="/Feedback" element={<Feedback />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/ArticlesPage" element={<ArticlesPage />} />
        <Route path="/Language" element={<LanguageSelector />} />
      </Routes>
    </>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <Router>
        <AppWrapper />
      </Router>
    </LanguageProvider>
  );
}

