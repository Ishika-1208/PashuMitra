import React from "react";
import "../Styles/BreedDetails.css";
import cow2 from "../Images/cow2.png"


const BreedDetails = () => {
  return (
    <div className="breed-details">
       {/* Title above hero */}
  <div className="page-title">
    <h1>Gir Cow</h1>
    <p>(Also known as "Kathiawari" or "Bhodey")</p>
  </div>

      {/* Hero Section */}
      <div className="hero">
        <img
          src={cow2} // Replace with breed image
          alt="Gir Cow"
        />
      </div>

    {/* Key Facts */}
<div className="key-facts">
  <h3>Key Facts</h3>
  <div className="facts-row">
    <div className="fact-card">
      <div className="fact-icon">📍</div>
      <div className="fact-label">Origin</div>
      <div className="fact-value">Gujarat, India</div>
    </div>

    <div className="fact-card">
      <div className="fact-icon">🥛</div>
      <div className="fact-label">Milk Yield</div>
      <div className="fact-value">1200–1800 liters/year</div>
    </div>

    <div className="fact-card">
      <div className="fact-icon">🌡️</div>
      <div className="fact-label">Heat Tolerance</div>
      <div className="fact-value">High</div>
    </div>

    <div className="fact-card">
      <div className="fact-icon">🧬</div>
      <div className="fact-label">Popular For</div>
      <div className="fact-value">Dairy & Draught Power</div>
    </div>
  </div>
</div>



      {/* Detailed Info */}
      <div className="details">
        <h2>Detailed Information</h2>

        <h3>History</h3>
        <p>
          The Gir cow breed originated in the Kathiawar peninsula of Gujarat, in western India. Its name is derived from the Gir Hills, which were its traditional breeding tract. The breed is also known by various other local names, including Bhodali, Desan, Gujarati, Kathiawari, Sorthi, and Surati. Historically, the Gir was maintained by traditional nomadic pastoral communities such as the Rabaris, Maldharis, and Ahirs. These communities have preserved the breed's purity through selective breeding and traditional wisdom for generations. The breed's ability to thrive in the harsh, dry, and semi-arid climates of its native region made it an emblem of strength and resilience. In the early 20th century, Gir cattle were exported to Brazil, where they have since flourished and been selectively bred to develop new, highly productive dairy and beef strains.
        </p>

        <h3>Visuals and Gallery</h3>
        <div className="gallery">
          <img
            src={cow2}
            alt="Gir Cow 1"
          />
          <img
            src={cow2}
            alt="Gir Cow 2"
          />
          <img
            src={cow2}
            alt="Gir Cow 3"
          />
          <img
            src={cow2}
            alt="Gir Cow 4"
          />
        </div>

        <h3>Physical Characteristics</h3>
        <ul>
          <li>The Gir cow has a distinctive and noble appearance with a large, bold frame.</li>
           <li>Frame: Gir cows are medium to large-sized animals. Cows typically weigh around 385 kg and stand about 130 cm tall, while bulls are heavier, averaging 545 kg and 140 cm in height.</li>
            <li>Head and Face: The most unique feature is its prominent, domed forehead, which acts as a natural cooling radiator for the brain. The face is long and narrow below the eyes, which are black-rimmed and have a hooded, sleepy appearance</li>
            <li> The ears are long, pendulous (up to 30 cm), and folded like a curled leaf, opening towards the front.</li>
             <li>Horns: The horns are set well back on the head, are thick at the base, and grow backward and then upward in a spiral sweep, giving them a half-moon or crown-like appearance.</li>
            <li>Udder Structure (for dairy breeds): The udder is well-developed, bowl- or round-shaped, with cylindrical teats that are evenly spaced.</li>
             <li>Other Features: The skin is loose, smooth, and pliable with short, glossy hair. They have a well-developed dewlap and a prominent hump, which is considered the largest among Zebu breeds. The coat color is typically mottled, ranging from reddish-brown through yellow to white, with pure red being the most predominant color.z</li>
        </ul>

        <h3>Productivity</h3>
        <ul>
          <li>The Gir is primarily a dairy breed, celebrated for producing high-quality milk.</li>
            <li>Average Milk Yield: The average lactation milk yield for a Gir cow is around 2,110 kg over a lactation period of 280-320 days. In well-managed farms and with selective breeding, a cow can yield as much as 3,000-4,200 liters per lactation. The daily milk yield can average between 8.6 to 15 liters.</li>
           <li>Milk Quality: Gir cow milk is highly valued for its A2 beta-casein protein, which is believed to be easier to digest for some individuals than the A1 protein found in many European breeds. The milk also has a high butterfat content, averaging 4.6% to 5.5%, and a protein content of around 3.2%. This rich milk is ideal for making traditional dairy products like ghee, curd, and sweets.</li>
            <li>Dual-Purpose Potential: While primarily a dairy breed, the bullocks are strong and well-suited for heavy draught work in various soil conditions</li>
        </ul>

        <h3>Temperament</h3>
        <p>
          The Gir cow is well-regarded for its docile, calm, and gentle temperament. This disposition makes the animals easy to handle and manage, which is a significant advantage in dairy farming. Studies have shown a strong correlation between a docile temperament and higher milk yield and better milking speed. Aggressive or nervous behavior is rare and can be managed with consistent and gentle handling
        </p>

        <h3>Health and Management</h3>
        <ul>
         <li>The Gir cow is a hardy and resilient breed, making it relatively low-maintenance compared to many exotic breeds.</li>
          <li>Health: Due to its indigenous origins, the Gir is naturally resistant to many tropical diseases and parasites. Its unique physical features, such as the dewlap, loose skin, and domed forehead, are natural adaptations that help it regulate body temperature and cope with heat stress.</li>
          <li>Dietary Needs: Gir cows thrive on low-input diets and are well-adapted to grazing on native grasses in semi-arid environments.</li>
         <li>Management: While hardy, proper management practices are crucial for maximizing productivity. This includes providing adequate housing, ensuring clean drinking water, and supplementing their diet with concentrates and mineral mixtures, especially for milking cows. Regular and gentle handling, as well as maintaining proper hygiene during milking, are also essential for their well-being and milk production.</li>
        </ul>
      </div>
    </div>
  );
};

export default BreedDetails;
