export function weightedAvgPrice(
  currQuantity,
  currAvgPrice,
  additionalQuantity,
  newPrice,
) {
  return (
    (currAvgPrice * currQuantity + additionalQuantity * newPrice) /
    (currQuantity + additionalQuantity)
  );
}

// positive for profit and -ve for loss
export function profitLoss(stockQuantity, avgStockPrice, currentPrice) {
  return stockQuantity * (currentPrice - avgStockPrice);
}

export function currentStockHolding(quantity, currentPrice) {
  return quantity * currentPrice;
}

export function totalInvestedAmount(holdings) {
  return holdings.reduce((totalInvestedAmt, currHolding) => {
    return totalInvestedAmt + currHolding.quantity * currHolding.avgPrice;
  }, 0);
}

export function totalPortfolioValue(holdings, priceMap) {
  return holdings.reduce((totalPortfolioAmt, holding) => {
    return (
      totalPortfolioAmt +
      (priceMap[holding.symbol] ?? holding.avgPrice) * holding.quantity
    );
  }, 0);
}

export function totalPortfolioProfitLoss(holdings, priceMap) {
  return (
    totalPortfolioValue(holdings, priceMap) - totalInvestedAmount(holdings)
  );
}
