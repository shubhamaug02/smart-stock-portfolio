export function loadHoldings() {
    const holdings = JSON.parse(localStorage.getItem('holdings'))
    return holdings || [];
}

export function saveHoldings(holdings) {
    localStorage.setItem('holdings', JSON.stringify(holdings));
}