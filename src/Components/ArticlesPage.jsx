import React, { useState, useEffect } from "react";
import "../Styles/ArticlesPage.css";
import cow6 from "../Images/breedsbackground.png";
import cow3 from "../Images/cow3.png";
import cow4 from "../Images/cow4.png";
import cow5 from "../Images/cow5.png";
import cow7 from "../Images/cow7.png";
import woodbackground from "../Images/woodbackground.png";

const translations = {
  en: {
    bannerText:
      "Uncover the hidden lives and remarkable intelligence of one of humanity's oldest companions...",
    categoriesTitle: "Categories",
    articlesTitle: "Articles",
    readMore: "Read more",
    like: "Like",
    share: "Share",
    categories: [
      "Cattles care related",
      "Government schemes",
      "Diseases",
      "Rare breeds",
      "Crossbreeding",
      "Milk production",
      "Breed population",
      "Cattles diet",
    ],
  },
  hi: {
    bannerText:
      "मानवता के सबसे पुराने साथियों में से एक के छिपे हुए जीवन और असाधारण बुद्धिमत्ता को उजागर करें...",
    categoriesTitle: "श्रेणियाँ",
    articlesTitle: "लेख",
    readMore: "और पढ़ें",
    like: "लाइक",
    share: "साझा करें",
    categories: [
      "गाय देखभाल संबंधित",
      "सरकारी योजनाएँ",
      "बीमारियाँ",
      "दुर्लभ नस्लें",
      "क्रॉसब्रीडिंग",
      "दूध उत्पादन",
      "नस्ल जनसंख्या",
      "गाय का आहार",
    ],
  },
};

const articles = [
  {
    id: 1,
    title: "Forecasting Cattle and Buffalo Population in India",
    description:
      "The article explores how buffaloes, unlike cattle, occupy a paradoxical position in Indian society: they are economically vital yet culturally marginalized.",
    image: cow3,
  },
  {
    id: 2,
    title: "Forecasting Cattle and Buffalo Population in India",
    description:
      "The article explores how buffaloes, unlike cattle, occupy a paradoxical position in Indian society: they are economically vital yet culturally marginalized.",
    image: cow4,
  },
  {
    id: 3,
    title: "Forecasting Cattle and Buffalo Population in India",
    description:
      "The article explores how buffaloes, unlike cattle, occupy a paradoxical position in Indian society: they are economically vital yet culturally marginalized.",
    image: cow5,
  },
  {
    id: 4,
    title: "Forecasting Cattle and Buffalo Population in India",
    description:
      "The article explores how buffaloes, unlike cattle, occupy a paradoxical position in Indian society: they are economically vital yet culturally marginalized.",
    image: cow7,
  },
];

export default function ArticlesPage() {
  const [likes, setLikes] = useState({});
  const [search] = useState("");
  const [lang, setLang] = useState(localStorage.getItem("lang") || "en");

  useEffect(() => {
    localStorage.setItem("lang", lang);
  }, [lang]);

  const t = translations[lang];

  const handleLike = (id) => {
    setLikes((prev) => ({
      ...prev,
      [id]: prev[id] ? prev[id] + 1 : 1,
    }));
  };

  const handleShare = (id) => {
    const article = articles.find((a) => a.id === id);
    if (navigator.share) {
      navigator.share({
        title: article.title,
        text: article.description,
        url: window.location.href,
      });
    } else {
      alert("Sharing is not supported in this browser.");
    }
  };

  const filteredArticles = articles.filter((article) =>
    article.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="page-container">
      {/* Banner */}
      <div
        className="banner"
        style={{ backgroundImage: `url(${woodbackground})` }}
      >
        <img src={cow6} alt="Cow" className="overlay-image" />
        <div className="banner-text">{t.bannerText}</div>
      </div>

      {/* Optional: you can remove buttons if you don't want them */}
      {/* <div className="language-switcher">
        <button onClick={() => setLang("en")}>English</button>
        <button onClick={() => setLang("hi")}>हिन्दी</button>
      </div> */}

      {/* Main content */}
      <div className="content">
        {/* Sidebar */}
        <aside className="sidebar">
          <h3>{t.categoriesTitle}</h3>
          <ul>
            {t.categories.map((cat, idx) => (
              <li key={idx}>{cat}</li>
            ))}
          </ul>
        </aside>

        {/* Articles */}
        <main className="articles">
          <div className="articles-header">
            <h2>{t.articlesTitle}</h2>
          </div>

          {filteredArticles.map((article) => (
            <div key={article.id} className="article-card">
              <img src={article.image} alt="article" />
              <div className="article-info">
                <h3>{article.title}</h3>
                <p>{article.description}</p>
                <button>{t.readMore}</button>

                {/* Like & Share */}
                <div className="article-actions">
                  <button
                    className="like-btn"
                    onClick={() => handleLike(article.id)}
                  >
                    {t.like}
                  </button>
                  <button
                    className="share-btn"
                    onClick={() => handleShare(article.id)}
                  >
                    {t.share}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </main>
      </div>
    </div>
  );
}
