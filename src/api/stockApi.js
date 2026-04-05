import { buyStock } from "../store/portfolioSlice";

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

export async function fetchAllHoldings() {
    try {
        const data = await fetch('http://localhost:8080/api/holdings');
        const json = await data.json();

        return json;
    }
    catch (e) {
        throw e;
    }
}

export async function buyStockApi(symbol, quantity, price) {
    try {
        await fetch('http://localhost:8080/api/holdings/buy', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ symbol, quantity, avgPrice: price })
        });
    }
    catch (e) {
        throw e;
    }
}

export async function sellStockApi(symbol, quantity) {
    try {
        const data = await fetch('http://localhost:8080/api/holdings/sell', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ symbol, quantity })
        });
    }
    catch (e) {
        throw e;
    }
}