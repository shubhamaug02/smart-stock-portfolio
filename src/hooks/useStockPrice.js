import { useQuery } from "@tanstack/react-query";
import { fetchStockQuote } from "../api/stockApi";

export function useStockPrice(symbol) {
    return useQuery({
        queryKey: ['price', symbol],
        queryFn: () => fetchStockQuote(symbol),
        staleTime: 60000,
        enabled: !!symbol
    });
}
