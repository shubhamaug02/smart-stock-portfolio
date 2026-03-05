import React, { useState } from "react";
import { filterStocks } from "../utils/searchUtils";
import { mockPriceMap, mockStocks } from "../constants/mockData";
import { Link } from "react-router-dom";
import { formatCurrency } from "../utils/formatters";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const list = filterStocks(mockStocks, searchTerm);

  return (
    <div>
      <div className="mb-4">
        <input
          value={searchTerm}
          type="text"
          placeholder="Search by name or symbol..."
          onChange={(e) => setSearchTerm(e.target.value)}
          className="input input-bordered w-full max-w-md"
        />
      </div>
      <div className="overflow-x-auto w-full">
        <table className="table table-xs table-pin-rows table-pin-cols">
          <thead>
            <tr>
              <th>Name</th>
              <th>Symbol</th>
              <th>current Price</th>
              <th>Trade</th>
            </tr>
          </thead>
          <tbody>
            {list.map((item) => (
              <tr key={item.symbol}>
                <td>{item.name}</td>
                <td>{item.symbol}</td>
                <td>{formatCurrency(mockPriceMap[item.symbol])}</td>
                <td>
                  <Link
                    to={"/stock/" + item.symbol}
                    className="btn btn-xs btn-primary"
                  >
                    Trade
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Search;
