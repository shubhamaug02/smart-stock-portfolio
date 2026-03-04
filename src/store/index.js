import { configureStore } from "@reduxjs/toolkit";
import portfolioSlice, { setHoldings } from './portfolioSlice';
import { saveHoldings } from "../utils/localStorage";
import { mockHoldings } from "../constants/mockData";

const store = configureStore({
    reducer: {
        portfolio: portfolioSlice
    }
});

if (store.getState().portfolio.holdings.length === 0) {
    store.dispatch(setHoldings(mockHoldings));
}

store.subscribe(() => {
    saveHoldings(store.getState().portfolio.holdings);
});

export default store;
