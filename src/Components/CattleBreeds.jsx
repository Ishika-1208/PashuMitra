import React, { useState, useEffect } from "react";
import "../Styles/CattleBreeds.css";
import backgrounimage from "../Images/breedsbackground.png";
import cow2 from "../Images/cow2.png";
import cow3 from "../Images/cow3.png";
import cow4 from "../Images/cow4.png";
import cow5 from "../Images/cow5.png";
import cow6 from "../Images/cow6.png";
import cow7 from "../Images/cow7.png";
import cow8 from "../Images/cow8.png";
import cow9 from "../Images/cow9.png";

const breedsData = [
  {
    en: { name: "Holstein Friesian", desc: "Originating from the Netherlands, known for high milk yield." },
    hi: { name: "होलस्टीन फ्रीज़ियन", desc: "नीदरलैंड से उत्पन्न, उच्च दूध उपज के लिए जाना जाता है।" },
    img: cow3,
  },
  {
    en: { name: "Gir Cow", desc: "Originating from Gujarat, hardy and known for quality milk." },
    hi: { name: "गिर गाय", desc: "गुजरात से उत्पन्न, मजबूत और उच्च गुणवत्ता वाले दूध के लिए जानी जाती है।" },
    img: cow2,
  },
  {
    en: { name: "Sahiwal", desc: "One of the best dairy breeds from Punjab, India." },
    hi: { name: "साहिवाल", desc: "भारत के पंजाब से सबसे अच्छी डेयरी प्रजातियों में से एक।" },
    img: cow9,
  },
  {
    en: { name: "Red Sindhi", desc: "Popular for both milk and draught power, from Sindh." },
    hi: { name: "रेड सिंधी", desc: "सिंध से, दूध और खींचने की शक्ति दोनों के लिए लोकप्रिय।" },
    img: cow4,
  },
  {
    en: { name: "Holstein Friesian", desc: "Originating from the Netherlands, known for high milk yield." },
    hi: { name: "होलस्टीन फ्रीज़ियन", desc: "नीदरलैंड से उत्पन्न, उच्च दूध उपज के लिए जाना जाता है।" },
    img: cow5,
  },
  {
    en: { name: "Gir Cow", desc: "Originating from Gujarat, hardy and known for quality milk." },
    hi: { name: "गिर गाय", desc: "गुजरात से उत्पन्न, मजबूत और उच्च गुणवत्ता वाले दूध के लिए जानी जाती है।" },
    img: cow6,
  },
  {
    en: { name: "Sahiwal", desc: "One of the best dairy breeds from Punjab, India." },
    hi: { name: "साहिवाल", desc: "भारत के पंजाब से सबसे अच्छी डेयरी प्रजातियों में से एक।" },
    img: cow7,
  },
  {
    en: { name: "Red Sindhi", desc: "Popular for both milk and draught power, from Sindh." },
    hi: { name: "रेड सिंधी", desc: "सिंध से, दूध और खींचने की शक्ति दोनों के लिए लोकप्रिय।" },
    img: cow8,
  },
  {
    en: { name: "Holstein Friesian", desc: "Originating from the Netherlands, known for high milk yield." },
    hi: { name: "होलस्टीन फ्रीज़ियन", desc: "नीदरलैंड से उत्पन्न, उच्च दूध उपज के लिए जाना जाता है।" },
    img: cow9,
  },
  {
    en: { name: "Gir Cow", desc: "Originating from Gujarat, hardy and known for quality milk." },
    hi: { name: "गिर गाय", desc: "गुजरात से उत्पन्न, मजबूत और उच्च गुणवत्ता वाले दूध के लिए जानी जाती है।" },
    img: cow3,
  },
  {
    en: { name: "Sahiwal", desc: "One of the best dairy breeds from Punjab, India." },
    hi: { name: "साहिवाल", desc: "भारत के पंजाब से सबसे अच्छी डेयरी प्रजातियों में से एक।" },
    img: cow4,
  },
  {
    en: { name: "Red Sindhi", desc: "Popular for both milk and draught power, from Sindh." },
    hi: { name: "रेड सिंधी", desc: "सिंध से, दूध और खींचने की शक्ति दोनों के लिए लोकप्रिय।" },
    img: cow5,
  },
  {
    en: { name: "Holstein Friesian", desc: "Originating from the Netherlands, known for high milk yield." },
    hi: { name: "होलस्टीन फ्रीज़ियन", desc: "नीदरलैंड से उत्पन्न, उच्च दूध उपज के लिए जाना जाता है।" },
    img: cow2,
  },
  {
    en: { name: "Gir Cow", desc: "Originating from Gujarat, hardy and known for quality milk." },
    hi: { name: "गिर गाय", desc: "गुजरात से उत्पन्न, मजबूत और उच्च गुणवत्ता वाले दूध के लिए जानी जाती है।" },
    img: cow6,
  },
  {
    en: { name: "Sahiwal", desc: "One of the best dairy breeds from Punjab, India." },
    hi: { name: "साहिवाल", desc: "भारत के पंजाब से सबसे अच्छी डेयरी प्रजातियों में से एक।" },
    img: cow7,
  },
  {
    en: { name: "Red Sindhi", desc: "Popular for both milk and draught power, from Sindh." },
    hi: { name: "रेड सिंधी", desc: "सिंध से, दूध और खींचने की शक्ति दोनों के लिए लोकप्रिय।" },
    img: cow8,
  },
];

const translations = {
  en: {
    searchPlaceholder: "Search breeds...",
    pageTitle: "Popular Cattle Breeds",
    readMore: "Read More",
  },
  hi: {
    searchPlaceholder: "ब्रेड खोजें...",
    pageTitle: "लोकप्रिय गाय प्रजातियाँ",
    readMore: "और पढ़ें",
  },
};

const CattleBreeds = () => {
  const [search, setSearch] = useState("");
  const [lang, setLang] = useState(localStorage.getItem("lang") || "en");

  useEffect(() => {
    localStorage.setItem("lang", lang);
  }, [lang]);

  const filteredBreeds = breedsData.filter((breed) =>
    breed[lang].name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="breeds-wrapper">
      {/* Language Switcher */}
      <div className="language-switcher">
        <button onClick={() => setLang("en")}>English</button>
        <button onClick={() => setLang("hi")}>हिन्दी</button>
      </div>

      {/* Hero Image */}
      <div className="breeds-hero">
        <img src={backgrounimage} alt="Cattle" />
      </div>

      {/* Search + Title */}
      <div className="breeds-header">
        <input
          type="text"
          placeholder={translations[lang].searchPlaceholder}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <h2>{translations[lang].pageTitle}</h2>
      </div>

      {/* Grid */}
      <div className="breeds-grid">
        {filteredBreeds.map((breed, index) => (
          <div key={index} className="breed-card">
            <img src={breed.img} alt={breed[lang].name} />
            <h3>{breed[lang].name}</h3>
            <p>{breed[lang].desc}</p>
            <a href="/BreedDetails">{translations[lang].readMore}</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CattleBreeds;
