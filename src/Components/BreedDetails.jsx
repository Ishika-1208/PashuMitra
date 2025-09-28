import React, { useState, useEffect } from "react";
import "../Styles/BreedDetails.css";
import cow2 from "../Images/breedsbackground.png";

const translations = {
  en: {
    pageTitle: "Gir Cow",
    pageSubtitle: '(Also known as "Kathiawari" or "Bhodey")',
    keyFactsTitle: "Key Facts",
    facts: {
      origin: "Gujarat, India",
      milkYield: "1200–1800 liters/year",
      heatTolerance: "High",
      popularFor: "Dairy & Draught Power",
    },
    detailedInfoTitle: "Detailed Information",
    sections: {
      history: {
        title: "History",
        content:
          "The Gir cow breed originated in the Kathiawar peninsula of Gujarat, in western India. Its name is derived from the Gir Hills, which were its traditional breeding tract. The breed is also known by various other local names, including Bhodali, Desan, Gujarati, Kathiawari, Sorthi, and Surati. Historically, the Gir was maintained by traditional nomadic pastoral communities such as the Rabaris, Maldharis, and Ahirs. These communities have preserved the breed's purity through selective breeding and traditional wisdom for generations. The breed's ability to thrive in the harsh, dry, and semi-arid climates of its native region made it an emblem of strength and resilience. In the early 20th century, Gir cattle were exported to Brazil, where they have since flourished and been selectively bred to develop new, highly productive dairy and beef strains."
      },
      visuals: {
        title: "Visuals and Gallery"
      },
      physical: {
        title: "Physical Characteristics",
        items: [
          "The Gir cow has a distinctive and noble appearance with a large, bold frame.",
          "Frame: Gir cows are medium to large-sized animals. Cows typically weigh around 385 kg and stand about 130 cm tall, while bulls are heavier, averaging 545 kg and 140 cm in height.",
          "Head and Face: The most unique feature is its prominent, domed forehead, which acts as a natural cooling radiator for the brain. The face is long and narrow below the eyes, which are black-rimmed and have a hooded, sleepy appearance",
          "The ears are long, pendulous (up to 30 cm), and folded like a curled leaf, opening towards the front.",
          "Horns: The horns are set well back on the head, are thick at the base, and grow backward and then upward in a spiral sweep, giving them a half-moon or crown-like appearance.",
          "Udder Structure (for dairy breeds): The udder is well-developed, bowl- or round-shaped, with cylindrical teats that are evenly spaced.",
          "Other Features: The skin is loose, smooth, and pliable with short, glossy hair. They have a well-developed dewlap and a prominent hump, which is considered the largest among Zebu breeds. The coat color is typically mottled, ranging from reddish-brown through yellow to white, with pure red being the most predominant color."
        ]
      },
      productivity: {
        title: "Productivity",
        items: [
          "The Gir is primarily a dairy breed, celebrated for producing high-quality milk.",
          "Average Milk Yield: The average lactation milk yield for a Gir cow is around 2,110 kg over a lactation period of 280-320 days. In well-managed farms and with selective breeding, a cow can yield as much as 3,000-4,200 liters per lactation. The daily milk yield can average between 8.6 to 15 liters.",
          "Milk Quality: Gir cow milk is highly valued for its A2 beta-casein protein, which is believed to be easier to digest for some individuals than the A1 protein found in many European breeds. The milk also has a high butterfat content, averaging 4.6% to 5.5%, and a protein content of around 3.2%. This rich milk is ideal for making traditional dairy products like ghee, curd, and sweets.",
          "Dual-Purpose Potential: While primarily a dairy breed, the bullocks are strong and well-suited for heavy draught work in various soil conditions"
        ]
      },
      temperament: {
        title: "Temperament",
        content:
          "The Gir cow is well-regarded for its docile, calm, and gentle temperament. This disposition makes the animals easy to handle and manage, which is a significant advantage in dairy farming. Studies have shown a strong correlation between a docile temperament and higher milk yield and better milking speed. Aggressive or nervous behavior is rare and can be managed with consistent and gentle handling"
      },
      health: {
        title: "Health and Management",
        items: [
          "The Gir cow is a hardy and resilient breed, making it relatively low-maintenance compared to many exotic breeds.",
          "Health: Due to its indigenous origins, the Gir is naturally resistant to many tropical diseases and parasites. Its unique physical features, such as the dewlap, loose skin, and domed forehead, are natural adaptations that help it regulate body temperature and cope with heat stress.",
          "Dietary Needs: Gir cows thrive on low-input diets and are well-adapted to grazing on native grasses in semi-arid environments.",
          "Management: While hardy, proper management practices are crucial for maximizing productivity. This includes providing adequate housing, ensuring clean drinking water, and supplementing their diet with concentrates and mineral mixtures, especially for milking cows. Regular and gentle handling, as well as maintaining proper hygiene during milking, are also essential for their well-being and milk production."
        ]
      }
    }
  },
  hi: {
    pageTitle: "गिर गाय",
    pageSubtitle: '(जिसे "काठियावाड़ी" या "भोदेय" के नाम से भी जाना जाता है)',
    keyFactsTitle: "मुख्य तथ्य",
    facts: {
      origin: "गुजरात, भारत",
      milkYield: "1200–1800 लीटर/वर्ष",
      heatTolerance: "उच्च",
      popularFor: "दूध और गाड़ी खींचने की शक्ति",
    },
    detailedInfoTitle: "विस्तृत जानकारी",
    sections: {
      history: {
        title: "इतिहास",
        content:
          "गिर गाय प्रजाति पश्चिमी भारत के गुजरात के काठियावाड़ प्रायद्वीप में उत्पन्न हुई। इसका नाम गिर पहाड़ियों से लिया गया है, जो इसका पारंपरिक प्रजनन क्षेत्र था। इस प्रजाति को विभिन्न स्थानीय नामों से भी जाना जाता है, जैसे भोदाली, देसन, गुजराती, काठियावाड़ी, सोर्थी और सूरत। ऐतिहासिक रूप से, गिर को पारंपरिक घुमंतू पशुपालक समुदायों जैसे रबारी, मालधारी और आहिरों द्वारा रखा गया था। इन समुदायों ने पीढ़ियों से चयनात्मक प्रजनन और पारंपरिक ज्ञान के माध्यम से प्रजाति की शुद्धता बनाए रखी है। यह प्रजाति अपने मूल क्षेत्र की कठोर, शुष्क और अर्ध-शुष्क जलवायु में जीवित रहने में सक्षम है। 20वीं शताब्दी की शुरुआत में, गिर गायों को ब्राजील में निर्यात किया गया, जहां उन्होंने फल-फूल कर नई, उच्च उत्पादक डेयरी और मांस प्रजातियों का विकास किया।"
      },
      visuals: {
        title: "दृश्य और गैलरी"
      },
      physical: {
        title: "शारीरिक विशेषताएँ",
        items: [
          "गिर गाय का भव्य और विशिष्ट रूप होता है।",
          "फ्रेम: गिर गायें मध्यम से बड़ी होती हैं। गाय का वजन लगभग 385 किग्रा और ऊँचाई 130 सेमी होती है, जबकि बैल भारी होते हैं, औसतन 545 किग्रा और 140 सेमी ऊँचाई।",
          "सिर और चेहरा: प्रमुख, गुंबददार माथा जो मस्तिष्क को ठंडा रखने का प्राकृतिक तरीका है। आँखों के नीचे चेहरा लंबा और संकरा होता है।",
          "कान लंबे, झूलते (लगभग 30 सेमी), और पत्ते जैसी मोड़ वाली आकृति में होते हैं।",
          "सींग: सींग पीछे की ओर बढ़ते हैं, मोटे आधार के साथ, और ऊपर की ओर सर्पिल में बढ़ते हैं, अर्धचंद्राकार या मुकुट जैसी आकृति देते हैं।",
          "उदर संरचना: उदर अच्छी तरह विकसित, कटोरे जैसी और सिलेंडर के आकार की थनों के साथ होती है।",
          "अन्य विशेषताएँ: त्वचा ढीली, चिकनी और लचीली होती है, बाल छोटे और चमकदार होते हैं। डेवलप्ड डेवलप और प्रमुख कूबड़ होता है। कोट का रंग लालभूरे से पीले और सफेद तक हो सकता है।"
        ]
      },
      productivity: {
        title: "उत्पादकता",
        items: [
          "गिर मुख्य रूप से डेयरी प्रजाति है।",
          "औसत दूध उत्पादन: एक गिर गाय की औसत लैक्टेशन दूध उत्पादन लगभग 2,110 किग्रा होता है। अच्छी देखभाल और चयनात्मक प्रजनन में, यह 3,000–4,200 लीटर तक पहुंच सकता है। दैनिक दूध उत्पादन 8.6–15 लीटर होता है।",
          "दूध की गुणवत्ता: गिर दूध A2 बीटा-कैसीन प्रोटीन के लिए प्रसिद्ध है। मक्खन की मात्रा 4.6%–5.5% और प्रोटीन लगभग 3.2%।",
          "द्वैध उद्देश्य क्षमता: मुख्य रूप से डेयरी, लेकिन बैल भारी काम के लिए उपयुक्त।"
        ]
      },
      temperament: {
        title: "स्वभाव",
        content:
          "गिर गाय शांत, मिलनसार और कोमल स्वभाव की होती है। यह मिल्किंग और देखभाल में आसान होती है।"
      },
      health: {
        title: "स्वास्थ्य और प्रबंधन",
        items: [
          "गिर गाय कठोर और लचीली प्रजाति है।",
          "स्वास्थ्य: यह कई उष्णकटिबंधीय रोगों और परजीवियों के लिए प्राकृतिक रूप से प्रतिरोधी है।",
          "आहार: गिर गाय कम संसाधन वाले आहार पर अच्छी तरह से जीवित रहती है।",
          "प्रबंधन: उचित आवास, साफ पानी, और आवश्यक पूरक आहार देना महत्वपूर्ण है। नियमित देखभाल और स्वच्छता सुनिश्चित करना चाहिए।"
        ]
      }
    }
  }
};

const BreedDetails = () => {
  const [lang, setLang] = useState(localStorage.getItem("lang") || "en");

  useEffect(() => {
    localStorage.setItem("lang", lang);
  }, [lang]);

  const t = translations[lang];

  return (
    <div className="breed-details">
      {/* Language Switcher */}
      <div className="language-switcher">
        <button onClick={() => setLang("en")}>English</button>
        <button onClick={() => setLang("hi")}>हिन्दी</button>
      </div>

      {/* Title above hero */}
      <div className="page-title">
        <h1>{t.pageTitle}</h1>
        <p>{t.pageSubtitle}</p>
      </div>

      {/* Hero Section */}
      <div className="details-hero">
        <img src={cow2} alt={t.pageTitle} />
      </div>

      {/* Key Facts */}
      <div className="key-facts">
        <h3>{t.keyFactsTitle}</h3>
        <div className="facts-row">
          <div className="fact-card">
            <div className="fact-icon">📍</div>
            <div className="fact-label">Origin</div>
            <div className="fact-value">{t.facts.origin}</div>
          </div>
          <div className="fact-card">
            <div className="fact-icon">🥛</div>
            <div className="fact-label">Milk Yield</div>
            <div className="fact-value">{t.facts.milkYield}</div>
          </div>
          <div className="fact-card">
            <div className="fact-icon">🌡️</div>
            <div className="fact-label">Heat Tolerance</div>
            <div className="fact-value">{t.facts.heatTolerance}</div>
          </div>
          <div className="fact-card">
            <div className="fact-icon">🧬</div>
            <div className="fact-label">Popular For</div>
            <div className="fact-value">{t.facts.popularFor}</div>
          </div>
        </div>
      </div>

      {/* Detailed Info */}
      <div className="details">
        <h2>{t.detailedInfoTitle}</h2>

        <h3>{t.sections.history.title}</h3>
        <p>{t.sections.history.content}</p>

        <h3>{t.sections.visuals.title}</h3>
        <div className="gallery">
          <img src={cow2} alt={`${t.pageTitle} 1`} />
          <img src={cow2} alt={`${t.pageTitle} 2`} />
          <img src={cow2} alt={`${t.pageTitle} 3`} />
          <img src={cow2} alt={`${t.pageTitle} 4`} />
        </div>

        <h3>{t.sections.physical.title}</h3>
        <ul>
          {t.sections.physical.items.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>

        <h3>{t.sections.productivity.title}</h3>
        <ul>
          {t.sections.productivity.items.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>

        <h3>{t.sections.temperament.title}</h3>
        <p>{t.sections.temperament.content}</p>

        <h3>{t.sections.health.title}</h3>
        <ul>
          {t.sections.health.items.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BreedDetails;
