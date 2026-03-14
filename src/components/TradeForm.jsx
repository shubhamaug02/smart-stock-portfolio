import React, { memo, useState } from "react";

const TradeForm = memo(({ type, symbol, onSubmit }) => {
  const [quantity, setQuantity] = useState("");

  const handleOnClick = () => {
    if (!quantity || quantity <= 0) return;
    onSubmit(quantity);
  };

  const isBuy = type === "buy";

  return (
    <div className="card bg-base-100 shadow-sm p-6 w-80">
      <h4 className="text-lg font-semibold mb-4">
        {isBuy ? "Buy" : "Sell"} <span className="text-primary">{symbol}</span>
      </h4>
      <div className="form-control mb-4">
        <label className="label">
          <span className="label-text mb-2">Quantity</span>
        </label>
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
          placeholder="Enter Quantity"
          min="1"
          className="input input-bordered w-full"
        />
      </div>
      <button
        onClick={handleOnClick}
        className={`btn w-full ${isBuy ? "btn-success" : "btn-error"}`}
      >
        {isBuy ? "Buy" : "Sell"} {symbol}
      </button>
    </div>
  );
});

TradeForm.displayName = "TradeForm";
export default TradeForm;
