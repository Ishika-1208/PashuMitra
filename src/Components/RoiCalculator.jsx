import React, { useState, useEffect } from "react";
import "../Styles/RoiCalculator.css";
import roiImage from "../Images/roiImage.png";

const translations = {
  en: {
    title: "ROI Calculator",
    placeholders: {
      purchaseCost: "Cattle Purchasing Cost (₹)",
      feedingCost: "Daily Feeding Cost (₹)",
      milkProduction: "Daily Milk Production (litres)",
      milkRate: "Milk Rate (₹ per litre)",
    },
    button: "Calculate ROI",
    errors: {
      invalidInput: "Please fill all fields with valid numbers.",
    },
    results: {
      profit: (breakEven, dailyProfit) =>
        `✅ Break-even in ${breakEven.toFixed(1)} days\n💰 Daily Profit: ₹${dailyProfit.toFixed(2)}`,
      loss: (dailyProfit) =>
        `❌ No profit scenario!\n📉 Daily Loss: ₹${Math.abs(dailyProfit).toFixed(2)}`,
    },
  },
  hi: {
    title: "आरओआई कैलकुलेटर",
    placeholders: {
      purchaseCost: "गाय खरीद लागत (₹)",
      feedingCost: "दैनिक चारा लागत (₹)",
      milkProduction: "दैनिक दूध उत्पादन (लीटर में)",
      milkRate: "दूध की दर (₹ प्रति लीटर)",
    },
    button: "आरओआई गणना करें",
    errors: {
      invalidInput: "कृपया सभी फ़ील्ड सही संख्या के साथ भरें।",
    },
    results: {
      profit: (breakEven, dailyProfit) =>
        `✅ ब्रेक-ईवन ${breakEven.toFixed(1)} दिनों में\n💰 दैनिक लाभ: ₹${dailyProfit.toFixed(2)}`,
      loss: (dailyProfit) =>
        `❌ कोई लाभ नहीं!\n📉 दैनिक हानि: ₹${Math.abs(dailyProfit).toFixed(2)}`,
    },
  },
};

const ROICalculator = () => {
  const [lang, setLang] = useState(localStorage.getItem("lang") || "en");
  const [purchaseCost, setPurchaseCost] = useState("");
  const [feedingCost, setFeedingCost] = useState("");
  const [milkProduction, setMilkProduction] = useState("");
  const [milkRate, setMilkRate] = useState("");
  const [result, setResult] = useState("");
  const [resultClass, setResultClass] = useState("result");

  useEffect(() => {
    localStorage.setItem("lang", lang);
  }, [lang]);

  const t = translations[lang];

  const calculateROI = () => {
    const pCost = parseFloat(purchaseCost);
    const fCost = parseFloat(feedingCost);
    const mProduction = parseFloat(milkProduction);
    const mRate = parseFloat(milkRate);

    if (isNaN(pCost) || isNaN(fCost) || isNaN(mProduction) || isNaN(mRate)) {
      setResult(t.errors.invalidInput);
      setResultClass("result");
      return;
    }

    const dailyIncome = mProduction * mRate;
    const dailyProfit = dailyIncome - fCost;

    if (dailyProfit > 0) {
      const breakEven = pCost / dailyProfit;
      setResult(t.results.profit(breakEven, dailyProfit));
      setResultClass("result profit");
    } else {
      setResult(t.results.loss(dailyProfit));
      setResultClass("result loss");
    }
  };

  return (
    <div className="roi-body" style={{ backgroundImage: `url(${roiImage})` }}>
      <div className="roi-container">
        {/* Removed language switcher buttons */}

        <h2>{t.title}</h2>

        <input
          type="number"
          placeholder={t.placeholders.purchaseCost}
          value={purchaseCost}
          onChange={(e) => setPurchaseCost(e.target.value)}
        />
        <input
          type="number"
          placeholder={t.placeholders.feedingCost}
          value={feedingCost}
          onChange={(e) => setFeedingCost(e.target.value)}
        />
        <input
          type="number"
          placeholder={t.placeholders.milkProduction}
          value={milkProduction}
          onChange={(e) => setMilkProduction(e.target.value)}
        />
        <input
          type="number"
          placeholder={t.placeholders.milkRate}
          value={milkRate}
          onChange={(e) => setMilkRate(e.target.value)}
        />

        <button onClick={calculateROI}>{t.button}</button>

        <div className={resultClass}>
          {result.split("\n").map((line, index) => (
            <div key={index}>{line}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ROICalculator;
