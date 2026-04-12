import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../api/stockApi";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

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
        <button className="btn btn-ghost text-error" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
