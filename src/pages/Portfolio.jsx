import React from "react";
import HoldingsTable from "../components/HoldingsTable";
import { useSelector } from "react-redux";
import { useStockPrices } from "../hooks/useStockPrices";

const Portfolio = () => {
  let holdings = useSelector((store) => store.portfolio.holdings);
  const { priceMap } = useStockPrices(
    holdings.map((holding) => holding.symbol),
  );

  return holdings.length === 0 ? (
    <div>No holdings yet. Search for stocks to get started</div>
  ) : (
    <div>
      <HoldingsTable holdings={holdings} priceMap={priceMap} />
    </div>
  );
};

export default Portfolio;
