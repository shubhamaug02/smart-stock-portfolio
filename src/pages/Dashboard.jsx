import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  totalInvestedAmount,
  totalPortfolioProfitLoss,
  totalPortfolioValue,
} from "../utils/calculations";
import { mockPriceMap } from "../constants/mockData";
import { SummaryCard } from "../components/SummaryCard";
import HoldingsTable from "../components/HoldingsTable";

const Dashboard = () => {
  const holdings = useSelector((store) => store.portfolio.holdings);
  const dispatch = useDispatch();

  return (
    <div>
      <div className="flex">
        <SummaryCard
          title="Portfolio Value"
          value={totalPortfolioValue(holdings, mockPriceMap)}
        />
        <SummaryCard
          title="Total Invested"
          value={totalInvestedAmount(holdings)}
        />
        <SummaryCard
          title="P&L"
          value={totalPortfolioProfitLoss(holdings, mockPriceMap)}
          showColor={true}
        />
      </div>

      <HoldingsTable holdings={holdings} priceMap={mockPriceMap} />
    </div>
  );
};

export default Dashboard;
