import React, { useState } from "react";
import "../Styles/CattleBreeds.css";
import backgrounimage from "../Images/breedsbackground.png"
import cow2 from "../Images/cow2.png"
// import cow3 from "../Images/cow3.png"

const CattleBreeds = () => {
  const [search, setSearch] = useState("");

  const breeds = [
    {
      name: "Holstein Friesian",
      desc: "Originating from the Netherlands, known for high milk yield.",
      img: "https://via.placeholder.com/300x200",
    },
    {
      name: "Gir Cow",
      desc: "Originating from Gujarat, hardy and known for quality milk.",
      img: "https://via.placeholder.com/300x200",
    },
    {
      name: "Sahiwal",
      desc: "One of the best dairy breeds from Punjab, India.",
      img: "https://via.placeholder.com/300x200",
    },
    {
      name: "Red Sindhi",
      desc: "Popular for both milk and draught power, from Sindh.",
      img: "https://via.placeholder.com/300x200",
    },
    {
      name: "Holstein Friesian",
      desc: "Originating from the Netherlands, known for high milk yield.",
      img: "https://via.placeholder.com/300x200",
    },
    {
      name: "Gir Cow",
      desc: "Originating from Gujarat, hardy and known for quality milk.",
      img: "https://via.placeholder.com/300x200",
    },
    {
      name: "Sahiwal",
      desc: "One of the best dairy breeds from Punjab, India.",
      img: "https://via.placeholder.com/300x200",
    },
    {
      name: "Red Sindhi",
      desc: "Popular for both milk and draught power, from Sindh.",
      img: "https://via.placeholder.com/300x200",
    },
    {
      name: "Holstein Friesian",
      desc: "Originating from the Netherlands, known for high milk yield.",
      img: "https://via.placeholder.com/300x200",
    },
    {
      name: "Gir Cow",
      desc: "Originating from Gujarat, hardy and known for quality milk.",
      img: "https://via.placeholder.com/300x200",
    },
    {
      name: "Sahiwal",
      desc: "One of the best dairy breeds from Punjab, India.",
      img: "https://via.placeholder.com/300x200",
    },
    {
      name: "Red Sindhi",
      desc: "Popular for both milk and draught power, from Sindh.",
      img: "https://via.placeholder.com/300x200",
    },
    {
      name: "Holstein Friesian",
      desc: "Originating from the Netherlands, known for high milk yield.",
      img: "https://via.placeholder.com/300x200",
    },
    {
      name: "Gir Cow",
      desc: "Originating from Gujarat, hardy and known for quality milk.",
      img: "https://via.placeholder.com/300x200",
    },
    {
      name: "Sahiwal",
      desc: "One of the best dairy breeds from Punjab, India.",
      img: "https://via.placeholder.com/300x200",
    },
    {
      name: "Red Sindhi",
      desc: "Popular for both milk and draught power, from Sindh.",
      img: "https://via.placeholder.com/300x200",
    },
  ];

  const filteredBreeds = breeds.filter((breed) =>
    breed.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="breeds-wrapper">
      {/* Hero Image */}
      <div className="breeds-hero">
        <img
          src={backgrounimage}
          alt="Cattle"
        />
      </div>

      {/* Search + Title */}
      <div className="breeds-header">
        <input
          type="text"
          placeholder="Search breeds..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <h2>Popular Cattle Breeds</h2>
      </div>

      {/* Grid */}
      <div className="breeds-grid">
        {filteredBreeds.map((breed, index) => (
          <div key={index} className="breed-card">
            <img src={cow2} alt={breed.name} />
            <h3>{breed.name}</h3>
            <p>{breed.desc}</p>
            <a href="/BreedDetails">Read More</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CattleBreeds;
