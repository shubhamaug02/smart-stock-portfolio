import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";

function App() {
  const Dashboard = lazy(() => import("./pages/Dashboard"));
  const Portfolio = lazy(() => import("./pages/Portfolio"));
  const Search = lazy(() => import("./pages/Search"));
  const StockDetail = lazy(() => import("./pages/StockDetail"));

  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="/portfolio" element={<Portfolio />}></Route>
            <Route path="/search" element={<Search />}></Route>
            <Route path="/stock/:symbol" element={<StockDetail />}></Route>
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
