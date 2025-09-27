import React, { useState } from "react";
import "../Styles/CattleBreeds.css";
import backgrounimage from "../Images/breedsbackground.png"
import cow2 from "../Images/cow2.png"
import cow4 from "../Images/cow4.png"
import cow5 from "../Images/cow5.png"
import cow6 from "../Images/cow6.png"
import cow7 from "../Images/cow7.png"
import cow8 from "../Images/cow8.png"
import cow9 from "../Images/cow9.png"
import cow3 from "../Images/cow3.png"

const CattleBreeds = () => {
  const [search, setSearch] = useState("");

  const breeds = [
    {
      name: "Holstein Friesian",
      desc: "Originating from the Netherlands, known for high milk yield.",
      img: cow3,
    },
    {
      name: "Gir Cow",
      desc: "Originating from Gujarat, hardy and known for quality milk.",
      img: cow2,
    },
    {
      name: "Sahiwal",
      desc: "One of the best dairy breeds from Punjab, India.",
      img: cow9,
    },
    {
      name: "Red Sindhi",
      desc: "Popular for both milk and draught power, from Sindh.",
      img: cow4,
    },
    {
      name: "Holstein Friesian",
      desc: "Originating from the Netherlands, known for high milk yield.",
      img: cow5,
    },
    {
      name: "Gir Cow",
      desc: "Originating from Gujarat, hardy and known for quality milk.",
      img: cow6,
    },
    {
      name: "Sahiwal",
      desc: "One of the best dairy breeds from Punjab, India.",
      img: cow7,
    },
    {
      name: "Red Sindhi",
      desc: "Popular for both milk and draught power, from Sindh.",
      img: cow8,
    },
    {
      name: "Holstein Friesian",
      desc: "Originating from the Netherlands, known for high milk yield.",
      img: cow9,
    },
    {
      name: "Gir Cow",
      desc: "Originating from Gujarat, hardy and known for quality milk.",
      img: cow3,
    },
    {
      name: "Sahiwal",
      desc: "One of the best dairy breeds from Punjab, India.",
      img: cow4,
    },
    {
      name: "Red Sindhi",
      desc: "Popular for both milk and draught power, from Sindh.",
      img: cow5,
    },
    {
      name: "Holstein Friesian",
      desc: "Originating from the Netherlands, known for high milk yield.",
      img: cow2,
    },
    {
      name: "Gir Cow",
      desc: "Originating from Gujarat, hardy and known for quality milk.",
      img: cow6,
    },
    {
      name: "Sahiwal",
      desc: "One of the best dairy breeds from Punjab, India.",
      img: cow7,
    },
    {
      name: "Red Sindhi",
      desc: "Popular for both milk and draught power, from Sindh.",
      img: cow8,
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
            <img src={breed.img} alt={breed.name} />
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
