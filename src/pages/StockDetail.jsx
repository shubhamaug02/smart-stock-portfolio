import React, { useCallback } from "react";
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

  // const { change, changePercent, currentPrice } = data;

  const change = data?.change ?? 0;
  const changePercent = data?.changePercent ?? 0;
  const currentPrice = data?.currentPrice ?? 0;

  const handleBuy = useCallback(
    (qty) => {
      dispatch(buyStock({ symbol, quantity: qty, avgPrice: currentPrice }));
    },
    [dispatch, symbol, currentPrice],
  );

  const handleSell = useCallback(
    (qty) => {
      dispatch(sellStock({ symbol, quantity: qty }));
    },
    [symbol, dispatch],
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) return <div>Error loading stock data</div>;

  return (
    <div>
      <p>
        {symbol} {formatCurrency(currentPrice)}
      </p>
      <p className={change > 0 ? "text-green-500" : "text-red-500"}>
        {change > 0 ? "+" : ""}
        {change.toFixed(2)} ({changePercent.toFixed(2)}%)
      </p>
      <TradeForm type="buy" symbol={symbol} onSubmit={handleBuy} />
      <TradeForm type="sell" symbol={symbol} onSubmit={handleSell} />
    </div>
  );
};

export default StockDetail;
