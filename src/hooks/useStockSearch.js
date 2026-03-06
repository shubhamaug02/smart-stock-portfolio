import { useQuery } from "@tanstack/react-query";
import { fetchStockSearch } from "../api/stockApi";

export function useStockSearch(query) {
    return useQuery({
        queryKey: ['search', query],
        queryFn: () => fetchStockSearch(query),
        staleTime: 30000,
        enabled: (query && query.length > 1) ? true : false
    });
}