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

const Dashboard = () => {
  const holdings = useSelector((store) => store.portfolio.holdings);
  const { priceMap } = useStockPrices(
    holdings?.map((holding) => holding.symbol.toString()),
  );

  return (
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
