import { lazy, Suspense, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import { useDispatch } from "react-redux";
import { fetchAllHoldings } from "./api/stockApi";
import { setHoldings } from "./store/portfolioSlice";
import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import PublicRoute from "./components/PublicRoute";

const Dashboard = lazy(() => import("./pages/Dashboard"));
const Portfolio = lazy(() => import("./pages/Portfolio"));
const Search = lazy(() => import("./pages/Search"));
const StockDetail = lazy(() => import("./pages/StockDetail"));

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    async function loadHoldings() {
      const token = localStorage.getItem("stock-holding-token");
      if (!token) return;
      try {
        const data = await fetchAllHoldings();
        dispatch(setHoldings(data));
      } catch (e) {
        console.error("Failed to load the holdings ", e);
      }
    }
    // if (localStorage.getItem("stock-holding-token"))
    loadHoldings();
  }, []);

  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route>
            <Route
              path="/register"
              element={
                <PublicRoute>
                  <Login />
                </PublicRoute>
              }
            ></Route>
            <Route
              path="/login"
              element={
                <PublicRoute>
                  <Login />
                </PublicRoute>
              }
            ></Route>
          </Route>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Layout />
              </ProtectedRoute>
            }
          >
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
