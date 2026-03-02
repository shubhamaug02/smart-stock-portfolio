import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  totalInvestedAmount,
  totalPortfolioProfitLoss,
  totalPortfolioValue,
} from "../utils/calculations";
import { mockHoldings, mockPriceMap } from "../constants/mockData";
import { buyStock, setHoldings } from "../store/portfolioSlice";

const Dashboard = () => {
  const holdings = useSelector((store) => store.portfolio.holdings);
  const dispatch = useDispatch();

  useEffect(() => {
    if (holdings.length === 0) {
      dispatch(setHoldings(mockHoldings));
    }
  }, []);

  return (
    <div>
      <div>Dashboard</div>
      {holdings.map((holding) => (
        <p>{`${holding.symbol}: ${holding.quantity} shares, ${holding.avgPrice}, currentPrice: ${mockPriceMap[holding.symbol]} `}</p>
      ))}
      <p>Portfolio Value : {totalPortfolioValue(holdings, mockPriceMap)}</p>
      <p>Total Invested: {totalInvestedAmount(holdings)}</p>
      <p>P&L: {totalPortfolioProfitLoss(holdings, mockPriceMap)}</p>
    </div>
  );
};

export default Dashboard;
