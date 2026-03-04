export const filterStocks = (stocks, searchTerm) => {
    if (!searchTerm)
        return [];
    return stocks.filter(stock => stock.name.toLowerCase().includes(searchTerm.toLowerCase()) || stock.symbol.toLowerCase().includes(searchTerm.toLowerCase()))
};
