import React, { useState } from "react";
import { filterStocks } from "../utils/searchUtils";
import { mockPriceMap, mockStocks } from "../constants/mockData";
import { Link } from "react-router-dom";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [list, setList] = useState([]);

  const handleOnChange = (value) => {
    setSearchTerm(value);
    setList(filterStocks(mockStocks, value));
  };

  return (
    <div>
      <p>Search</p>
      <input
        value={searchTerm}
        type="text"
        onChange={(e) => handleOnChange(e.target.value)}
      />
      {list.map((item) => (
        <div>
          <Link to={"/stock/" + item.symbol}>
            <h3>{item.name}</h3>
            <h3>{item.symbol}</h3>
            <p>{mockPriceMap[item.symbol]}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Search;
