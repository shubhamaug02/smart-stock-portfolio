import React, { useEffect } from "react";
import HoldingsTable from "../components/HoldingsTable";
import { mockPriceMap } from "../constants/mockData";
import { useSelector } from "react-redux";
import TradeForm from "../components/TradeForm";

const Portfolio = () => {
  let holdings = useSelector((store) => store.portfolio.holdings);

  return (
    <div>
      <HoldingsTable holdings={holdings} priceMap={mockPriceMap} />
    </div>
  );
};

export default Portfolio;
