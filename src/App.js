import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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

function App() {
  return (
    <Router>
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
          <Route path="/ArticlesPage" element={<ArticlesPage/>}/> */
        </Routes>
    </Router>
  );
}

export default App;
