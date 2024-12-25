
const evaluateChecklist = (data) => {
  const results = [];

  // Rule 1: Valuation Fee Paid
  results.push({
    rule: "Valuation Fee Paid",
    passed: data.isValuationFeePaid === true,
  });

  // Rule 2: UK Resident
  results.push({
    rule: "UK Resident",
    passed: data.isUkResident === true,
  });

  // Rule 3: Risk Rating Medium
  results.push({
    rule: "Risk Rating Medium",
    passed: data.riskRating === "Medium",
  });

  // Rule 4: LTV Below 60%
  const ltv = (data.loanRequired / data.purchasePrice) * 100;
  results.push({
    rule: "LTV Below 60%",
    passed: ltv < 60,
  });

  return results;
};

export default evaluateChecklist;
