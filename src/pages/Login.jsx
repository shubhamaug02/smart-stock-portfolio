import React, { useState } from "react";
import { login, register } from "../api/stockApi";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const isLogin = location.pathname === "/login";

  const handleSubmit = async () => {
    try {
      if (!username.trim() || !password.trim()) {
        setError("Invalid Credentials !!!");
        return;
      }
      if (isLogin) {
        await login(username, password);
      } else {
        await register(username, password);
      }

      navigate("/");
    } catch (e) {
      setError(e.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="card bg-base-100 shadow-lg p-8 w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">
          {isLogin ? "Login" : "Register"}
        </h2>

        <div className="form-control mb-4">
          <label className="label">
            <span className="label-text">Username</span>
          </label>
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter Username"
            className="input input-bordered w-full"
          />
        </div>

        <div className="form-control mb-4">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter Password"
            className="input input-bordered w-full"
          />
        </div>

        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

        <button onClick={handleSubmit} className="btn btn-primary w-full mb-4">
          {isLogin ? "Login" : "Register"}
        </button>

        {isLogin ? (
          <p className="text-center text-sm">
            New User?{" "}
            <Link to="/register" className="text-primary">
              Register here
            </Link>
          </p>
        ) : (
          <p className="text-center text-sm">
            Already registered?{" "}
            <Link to="/login" className="text-primary">
              Login here
            </Link>
          </p>
        )}
      </div>
    </div>
  );
};

export default Login;
