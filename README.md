Smart Stock Portfolio Platform — MVP Requirements
Project Goal

Build a Smart Stock Portfolio Platform that allows users to:

# Track stock investments

# Monitor portfolio value

# Simulate buy/sell trades

# View profit and loss

# This is a portfolio tracking system, not a real trading platform.

MVP Scope

- This is the minimum version to build first.

Focus:

- Clean UI
- Correct portfolio calculations
- Real stock price data
- Deployable app

Core Features

1. Dashboard
   Purpose
   Show overall portfolio summary.

Features

Total Portfolio Value
Total Investment
Total Profit/Loss
Holdings preview

Example
Stock Qty Avg Price Current Price P/L
AAPL 10 150 170 +200 2.

Portfolio Management

User Can

Add stock manually
Buy stocks
Sell stocks

Buy Stock

User enters:
Stock Symbol
Quantity

System:
Fetches current price
Updates holdings
Updates average price

Sell Stock

User enters:
Quantity

System:
Reduces quantity
Calculates profit/loss

3. Holdings Table

   Fields
   Stock Symbol
   Quantity
   Average Price
   Current Price
   Total Value
   Profit/Loss

4. Stock Search
   Features
   User can:
   Search stock by symbol
   Search stock by name

Results Show
Stock Name
Symbol
Current Price

5. Stock Detail Page
   Shows

Stock Name
Symbol
Current Price
Day Change %

Actions

Buy Stock
Sell Stock

Pages
1 Dashboard

Route:
/

Contains:
Summary Cards
Holdings Preview

2 Search Page

Route:
/search

Contains:
Search Bar
Search Results

3 Stock Detail

Route:
/stock/:symbol

Contains:
Stock Info
Buy/Sell Section

4 Portfolio Page

Route:
/portfolio

Contains:
Full Holdings Table
Data Storage (Phase 1)

Use:
LocalStorage

Store:
Holdings

Example:

[
{
symbol: "AAPL",
quantity: 10,
avgPrice: 150
}
]

APIs
Stock Price API Required.

Options:
Alpha Vantage
Yahoo Finance
Finnhub

Used For:
Current price
Stock search

Tech Stack
Frontend:
React
JavaScript
CSS

Routing:
React Router

State:
useState
Context API (optional)

Phase 1 Build Order
Step 1

Setup project

React app
Routing
Layout

Step 2

Build UI (No logic)
Dashboard UI
Search UI
Portfolio UI
Stock Detail UI
Use mock data.

Step 3

Portfolio Logic
Buy stock
Sell stock

Calculations

Step 4

API Integration
Fetch stock prices
Search stocks

MVP Done When

Project is complete when:
Portfolio updates correctly
Buy/Sell works
Stock prices load from API
Data saved in LocalStorage
UI works properly
App deployed

This is now exactly the requirement baseline we agreed on.
