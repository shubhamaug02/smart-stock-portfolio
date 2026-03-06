import React from "react";
import { useParams } from "react-router-dom";
import TradeForm from "../components/TradeForm";
import { useDispatch } from "react-redux";
import { buyStock, sellStock } from "../store/portfolioSlice";
import { useStockPrice } from "../hooks/useStockPrice";
import { formatCurrency } from "../utils/formatters";

const StockDetail = () => {
  const { symbol } = useParams();
  const dispatch = useDispatch();
  const { data, isLoading, error } = useStockPrice(symbol);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) return <div>Error loading stock data</div>;

  const { change, changePercent, currentPrice } = data;

  return (
    <div>
      <p>
        {symbol} {formatCurrency(currentPrice)}
      </p>
      <p className={change > 0 ? "text-green-500" : "text-red-500"}>
        {change > 0 ? "+" : ""}
        {change.toFixed(2)} ({changePercent.toFixed(2)}%)
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
