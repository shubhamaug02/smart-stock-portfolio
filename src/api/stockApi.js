const BASE_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8080';

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
        const data = await fetch(`${BASE_URL}/api/holdings`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": getAuthorizaionToken()
            }
        });
        const json = await data.json();

        return json;
    }
    catch (e) {
        throw e;
    }
}

export async function buyStockApi(symbol, quantity, price) {
    try {
        await fetch(`${BASE_URL}/api/holdings/buy`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": getAuthorizaionToken()
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
        const data = await fetch(`${BASE_URL}/api/holdings/sell`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": getAuthorizaionToken()
            },
            body: JSON.stringify({ symbol, quantity })
        });
    }
    catch (e) {
        throw e;
    }
}

export async function register(username, password) {
    try {
        const data = await fetch(`${BASE_URL}/api/auth/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ username, password })
        });
        if (!data.ok) {
            throw new Error("Invalid username or password");
        }
        const token = await data.text();
        localStorage.setItem('stock-holding-token', token);
        return token;
    }
    catch (e) {
        throw e;
    }
}

export async function login(username, password) {
    try {
        const data = await fetch(`${BASE_URL}/api/auth/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ username, password })
        });
        if (!data.ok) {
            throw new Error("Invalid username or password");
        }
        const token = await data.text();
        localStorage.setItem('stock-holding-token', token);
        return token;
    }
    catch (e) {
        throw e;
    }
}

function getAuthorizaionToken() {
    const token = localStorage.getItem('stock-holding-token');
    return `Bearer ${token}`;
}

export function logout() {
    localStorage.removeItem('stock-holding-token');
}