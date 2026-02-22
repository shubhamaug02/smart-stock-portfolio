import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-base-200 shadow">
      <div className="flex-1">
        <Link to="/" className="text-xl font-bold">
          Stock Portfolio
        </Link>
      </div>

      <div className="flex gap-4">
        <Link to="/" className="btn btn-ghost">
          Dashboard
        </Link>

        <Link to="/portfolio" className="btn btn-ghost">
          Portfolio
        </Link>

        <Link to="/search" className="btn btn-ghost">
          Search
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
