import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useStockSearch } from "../hooks/useStockSearch";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    let timer = setTimeout(() => {
      setSearchTerm(inputValue);
    }, 300);

    return () => clearTimeout(timer);
  }, [inputValue]);

  const { data: stocks, isLoading } = useStockSearch(searchTerm);

  return (
    <div>
      <div className="mb-4">
        <input
          value={inputValue}
          type="text"
          placeholder="Search by name or symbol..."
          onChange={(e) => setInputValue(e.target.value)}
          className="input input-bordered w-full max-w-md"
        />
      </div>

      {!inputValue && <p>Enter name or symbol to search...</p>}
      {isLoading && <p>Searching...</p>}

      <div className="overflow-x-auto w-full">
        <table className="table table-xs table-pin-rows table-pin-cols">
          <thead>
            <tr>
              <th>Name</th>
              <th>Symbol</th>
              <th>Trade</th>
            </tr>
          </thead>
          <tbody>
            {stocks?.map((item) => (
              <tr key={item.symbol}>
                <td>{item.name}</td>
                <td>{item.symbol}</td>
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
