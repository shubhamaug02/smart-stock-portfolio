import React, { useEffect } from "react";
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
        <SummaryCard
          title="Portfolio Value"
          value={totalPortfolioValue(holdings, priceMap)}
        />
        <SummaryCard
          title="Total Invested"
          value={totalInvestedAmount(holdings)}
        />
        <SummaryCard
          title="P&L"
          value={totalPortfolioProfitLoss(holdings, priceMap)}
          showColor={true}
        />
      </div>

      <HoldingsTable holdings={holdings} priceMap={priceMap} />
    </div>
  );
};

export default Dashboard;
