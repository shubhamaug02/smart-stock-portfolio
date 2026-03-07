
export async function fetchStockQuote(symbol) {
    const data = await fetch(`https://finnhub.io/api/v1/quote?symbol=${symbol}&token=${import.meta.env.VITE_FINNHUB_API_KEY}`);
    const json = await data.json();

    return {
        currentPrice: json.c,
        change: json.d,
        changePercent: json.dp
    };
}

export async function fetchStockSearch(query) {
    const data = await fetch(`https://finnhub.io/api/v1/search?q=${query}&token=${import.meta.env.VITE_FINNHUB_API_KEY}`);
    const json = await data.json();

    return json.result.filter(item => !item.symbol.includes('.')).map(item => ({
        symbol: item.symbol,
        name: item.description
    }));
}