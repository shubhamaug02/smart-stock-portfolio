import React from "react";
import { useParams } from "react-router-dom";
import { mockPriceMap } from "../constants/mockData";
import TradeForm from "../components/TradeForm";
import { useDispatch } from "react-redux";
import { buyStock, sellStock } from "../store/portfolioSlice";

const StockDetail = () => {
  const { symbol } = useParams();
  const dispatch = useDispatch();
  const currentPrice = mockPriceMap[symbol];

  return (
    <div>
      <p>
        {symbol} {currentPrice}
      </p>
      <TradeForm
        type="buy"
        symbol={symbol}
        onSubmit={(quantity) =>
          dispatch(buyStock({ symbol, quantity, avgPrice: currentPrice }))
        }
      />
      <TradeForm
        type="sell"
        symbol={symbol}
        onSubmit={(quantity) => dispatch(sellStock({ symbol, quantity }))}
      />
    </div>
  );
};

export default StockDetail;
