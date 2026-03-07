import { configureStore } from "@reduxjs/toolkit";
import portfolioSlice, { setHoldings } from './portfolioSlice';
import { saveHoldings } from "../utils/localStorage";

const store = configureStore({
    reducer: {
        portfolio: portfolioSlice
    }
});

store.subscribe(() => {
    saveHoldings(store.getState().portfolio.holdings);
});

export default store;
