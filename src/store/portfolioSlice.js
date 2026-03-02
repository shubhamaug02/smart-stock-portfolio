import { createSlice } from "@reduxjs/toolkit";
import { weightedAvgPrice } from "../utils/calculations";

const portfolioSlice = createSlice({
    name: 'portfolio',
    initialState: { holdings: [] },
    reducers: {
        buyStock: (state, action) => {
            const { symbol, quantity, avgPrice } = action.payload;
            const existing = state.holdings.find(item => item.symbol === symbol);
            if (!existing) {
                state.holdings.push({ symbol, quantity, avgPrice });
            }
            else {
                existing.avgPrice = weightedAvgPrice(existing.quantity, existing.avgPrice, quantity, avgPrice);
                existing.quantity += quantity;
            }
        },
        sellStock: (state, action) => {
            const { symbol, quantity } = action.payload;
            const existing = state.holdings.find(item => item.symbol === symbol);
            if (!existing || (quantity > existing.quantity)) {
                return;
            }
            else {
                existing.quantity -= quantity;
                state.holdings = state.holdings.filter(item => item.quantity > 0);
            }
        },
        setHoldings: (state, action) => {
            state.holdings = action.payload;
        }
    }
});

export default portfolioSlice.reducer;

export const { buyStock, sellStock, setHoldings } = portfolioSlice.actions