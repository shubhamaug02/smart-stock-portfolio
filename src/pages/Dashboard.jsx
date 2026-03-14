import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import {
  totalInvestedAmount,
  totalPortfolioProfitLoss,
  totalPortfolioValue,
} from "../utils/calculations";
import { SummaryCard } from "../components/SummaryCard";
import HoldingsTable from "../components/HoldingsTable";
import { useStockPrices } from "../hooks/useStockPrices";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const holdings = useSelector((store) => store.portfolio.holdings);
  const { priceMap } = useStockPrices(
    holdings?.map((holding) => holding.symbol.toString()),
  );

  const portfolioValue = useMemo(
    () => totalPortfolioValue(holdings, priceMap),
    [holdings, priceMap],
  );

  const investedValue = useMemo(
    () => totalInvestedAmount(holdings),
    [holdings],
  );

  const totalProfiltLoss = useMemo(
    () => totalPortfolioProfitLoss(holdings, priceMap),
    [holdings, priceMap],
  );

  return holdings.length === 0 ? (
    <div className="text-center py-12">
      <p className="text-lg mb-4">Your portfolio is empty</p>
      <Link to="/search" className="btn btn-primary">
        Search Stocks to Get Started
      </Link>
    </div>
  ) : (
    <div>
      <div className="flex">
        <SummaryCard title="Portfolio Value" value={portfolioValue} />
        <SummaryCard title="Total Invested" value={investedValue} />
        <SummaryCard title="P&L" value={totalProfiltLoss} showColor={true} />
      </div>

      <HoldingsTable holdings={holdings} priceMap={priceMap} />
    </div>
  );
};

export default Dashboard;
