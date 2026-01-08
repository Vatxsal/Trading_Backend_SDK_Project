const express = require("express");
const router = express.Router();
const { portfolio, instruments } = require("../data/store");

router.get("/", (req, res) => {
  const result = Object.keys(portfolio).map(symbol => ({
    symbol,
    quantity: portfolio[symbol],
    averagePrice: instruments[symbol].lastTradedPrice,
    currentValue: portfolio[symbol] * instruments[symbol].lastTradedPrice
  }));

  res.json(result);
});

module.exports = router;
