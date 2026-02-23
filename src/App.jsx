import { useState } from "react";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import Portfolio from "./pages/Portfolio";
import Search from "./pages/Search";
import StockDetail from "./pages/StockDetail";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="/portfolio" element={<Portfolio />}></Route>
          <Route path="/search" element={<Search />}></Route>
          <Route path="/stock/:symbol" element={<StockDetail />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
