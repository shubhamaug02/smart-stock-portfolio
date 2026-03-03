import React from "react";
import { currentStockHolding, profitLoss } from "../utils/calculations";
import { formatCurrency } from "../utils/formatters";

const HoldingsTable = ({ holdings, priceMap }) => {
  const holdingRows = holdings.map((holding) => ({
    symbol: holding.symbol,
    quantity: holding.quantity,
    avgPrice: holding.avgPrice,
    currentPrice: priceMap[holding.symbol],
    totalValue: currentStockHolding(holding.quantity, priceMap[holding.symbol]),
    profitAndLoss: profitLoss(
      holding.quantity,
      holding.avgPrice,
      priceMap[holding.symbol],
    ),
  }));

  return (
    <div className="overflow-x-auto w-full">
      <table className="table table-xs table-pin-rows table-pin-cols">
        <thead>
          <tr>
            <th>Symbol</th>
            <th>Quantity</th>
            <th>Avg Price</th>
            <th>Current Price</th>
            <th>Total Value</th>
            <th>P&L</th>
          </tr>
        </thead>
        <tbody>
          {holdingRows.map((holdingRow) => (
            <tr key={holdingRow.symbol}>
              <td>{holdingRow.symbol}</td>
              <td>{holdingRow.quantity}</td>
              <td>{formatCurrency(holdingRow.avgPrice)}</td>
              <td>{formatCurrency(holdingRow.currentPrice)}</td>
              <td>{formatCurrency(holdingRow.totalValue)}</td>
              <td
                className={
                  holdingRow.profitAndLoss >= 0
                    ? "text-green-500"
                    : "text-red-500"
                }
              >
                {holdingRow.profitAndLoss >= 0 ? "+" : ""}
                {formatCurrency(holdingRow.profitAndLoss)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HoldingsTable;
