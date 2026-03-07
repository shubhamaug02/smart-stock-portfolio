import { useQueries } from "@tanstack/react-query";
import { useStockPrice } from "./useStockPrice";
import { fetchStockQuote } from "../api/stockApi";

export function useStockPrices(symbols) {
    const results = useQueries({
        queries: symbols.map(symbol => ({
            queryKey: ['price', symbol],
            queryFn: () => fetchStockQuote(symbol),
            staleTime: 60000,
            enabled: !!symbol
        }))
    });

    // build priceMap
    const priceMap = {};
    results.forEach((result, index) => {
        if (result.data)
            priceMap[symbols[index]] = result.data.currentPrice;
    });

    const isLoading = results.some(r => r.isLoading);

    return { priceMap, isLoading };
}