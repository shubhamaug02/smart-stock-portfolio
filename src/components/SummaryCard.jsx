import React, { memo } from "react";
import { formatCurrency } from "../utils/formatters";

export const SummaryCard = memo(({ title, value, showColor }) => {
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <div className="card-body">
        <h2 className="card-title">{title}</h2>

        {showColor ? (
          <p className={value >= 0 ? "text-green-500" : "text-red-500"}>
            {value >= 0 ? "+" : ""}
            {formatCurrency(value)}
          </p>
        ) : (
          <p>{formatCurrency(value)}</p>
        )}
      </div>
    </div>
  );
});

SummaryCard.displayName = "SummaryCard";
