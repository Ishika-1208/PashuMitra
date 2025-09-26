import React, { useState } from "react";
import "../Styles/RoiCalculator.css";
// import RoiImage from "../Images/roiImage.png"; // Make sure the image path is correct

const ROICalculator = () => {
  const [purchaseCost, setPurchaseCost] = useState("");
  const [feedingCost, setFeedingCost] = useState("");
  const [milkProduction, setMilkProduction] = useState("");
  const [milkRate, setMilkRate] = useState("");
  const [result, setResult] = useState("");
  const [resultClass, setResultClass] = useState("result");

  const calculateROI = () => {
    const pCost = parseFloat(purchaseCost);
    const fCost = parseFloat(feedingCost);
    const mProduction = parseFloat(milkProduction);
    const mRate = parseFloat(milkRate);

    if (isNaN(pCost) || isNaN(fCost) || isNaN(mProduction) || isNaN(mRate)) {
      setResult("Please fill all fields with valid numbers.");
      setResultClass("result");
      return;
    }

    const dailyIncome = mProduction * mRate;
    const dailyProfit = dailyIncome - fCost;

    if (dailyProfit > 0) {
      const breakEven = pCost / dailyProfit;
      setResult(`✅ Break-even in ${breakEven.toFixed(1)} days\n💰 Daily Profit: ₹${dailyProfit.toFixed(2)}`);
      setResultClass("result profit");
    } else {
      setResult(`❌ No profit scenario!\n📉 Daily Loss: ₹${Math.abs(dailyProfit).toFixed(2)}`);
      setResultClass("result loss");
    }
  };

  return (
    <div className="roi-body">
    <div className="roi-container">
      <h2>ROI Calculator</h2>

      <input
        type="number"
        placeholder="Cattle Purchasing Cost (₹)"
        value={purchaseCost}
        onChange={(e) => setPurchaseCost(e.target.value)}
      />
      <input
        type="number"
        placeholder="Daily Feeding Cost (₹)"
        value={feedingCost}
        onChange={(e) => setFeedingCost(e.target.value)}
      />
      <input
        type="number"
        placeholder="Daily Milk Production (litres)"
        value={milkProduction}
        onChange={(e) => setMilkProduction(e.target.value)}
      />
      <input
        type="number"
        placeholder="Milk Rate (₹ per litre)"
        value={milkRate}
        onChange={(e) => setMilkRate(e.target.value)}
      />

      <button onClick={calculateROI}>Calculate ROI</button>

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
