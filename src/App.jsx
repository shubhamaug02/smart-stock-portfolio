import { useState } from "react";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import Portfolio from "./components/Portfolio";
import Search from "./components/Search";
import StockDetail from "./components/StockDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}></Route>
        <Route path="/portfolio" element={<Portfolio />}></Route>
        <Route path="/search" element={<Search />}></Route>
        <Route path="/stock/:symbol" element={<StockDetail />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
