import React, { useState } from "react";
import "../Styles/ArticlesPage.css";
import cow6 from "../Images/breedsbackground.png";
import cow3 from "../Images/cow3.png";
import cow4 from "../Images/cow4.png";
import cow5 from "../Images/cow5.png";
import cow7 from "../Images/cow7.png";
import woodbackground from "../Images/woodbackground.png";

const categories = [
  "Cattles care related",
  "Government schemes",
  "Diseases",
  "Rare breeds",
  "Crossbreeding",
  "Milk production",
  "Breed population",
  "Cattles diet",
];

const articles = [
  {
    id: 1,
    title: "Forecasting Cattle and Buffalo Population in India",
    description:
      "The article explores how buffaloes, unlike cattle, occupy a paradoxical position in Indian society: they are economically vital yet culturally marginalized.",
    image: {cow3},
  },
  {
    id: 2,
    title: "Forecasting Cattle and Buffalo Population in India",
    description:
      "The article explores how buffaloes, unlike cattle, occupy a paradoxical position in Indian society: they are economically vital yet culturally marginalized.",
    image: {cow4},
  },
  {
    id: 3,
    title: "Forecasting Cattle and Buffalo Population in India",
    description:
      "The article explores how buffaloes, unlike cattle, occupy a paradoxical position in Indian society: they are economically vital yet culturally marginalized.",
    image:{cow5},
  },
  {
    id: 4,
    title: "Forecasting Cattle and Buffalo Population in India",
    description:
      "The article explores how buffaloes, unlike cattle, occupy a paradoxical position in Indian society: they are economically vital yet culturally marginalized.",
    image: {cow7},
  },
];

export default function ArticlesPage() {
  const [search] = useState("");

  const filteredArticles = articles.filter((article) =>
    article.title.toLowerCase().includes(search.toLowerCase())
  );

   <div 
  className="banner" 
  style={{ backgroundImage: `url(${woodbackground})` }}>
  </div>

  return (
    <div className="page-container">
      {/* Header / Banner */}
      <div className="banner" style={{ backgroundImage: `url(${woodbackground})` }}>
        <div className="banner">
      <img src={cow6} alt="Cow" className="overlay-image" />
       </div>
        <div className="banner-text">
          Uncover the hidden lives and remarkable intelligence of one of
          humanity's oldest companions...
        </div>
      </div>

      {/* Main content */}
      <div className="content">
        {/* Categories Sidebar */}
        <aside className="sidebar">
          <h3>Categories</h3>
          <ul>
            {categories.map((cat, idx) => (
              <li key={idx}>{cat}</li>
            ))}
          </ul>
        </aside>

        {/* Articles Section */}
        <main className="articles">
          <div className="articles-header">
            <h2>Articles</h2>
          </div>

          {filteredArticles.map((article) => (
            <div key={article.id} className="article-card">
              <img src={cow3} alt="article" />
              <div className="article-info">
                <h3>{article.title}</h3>
                <p>{article.description}</p>
                <button>Read more</button>
              </div>
            </div>
          ))}
        </main>
      </div>
    </div>
  );
}
