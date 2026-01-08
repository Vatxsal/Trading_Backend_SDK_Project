const { v4: uuidv4 } = require("uuid");
const { instruments, orders, trades, portfolio } = require("../data/store");

function placeOrder(order) {
  if (order.quantity <= 0) {
    throw new Error("Quantity must be greater than zero");
  }

  if (order.orderStyle === "LIMIT" && !order.price) {
    throw new Error("Price required for LIMIT order");
  }

  if (!instruments[order.symbol]) {
    throw new Error("Invalid symbol");
  }

  const orderId = uuidv4();

  const newOrder = {
    orderId,
    status: "PLACED",
    ...order
  };

  orders[orderId] = newOrder;

  // MARKET order execution
  if (order.orderStyle === "MARKET") {
    const trade = {
      tradeId: uuidv4(),
      orderId,
      symbol: order.symbol,
      quantity: order.quantity,
      price: instruments[order.symbol].lastTradedPrice
    };

    trades.push(trade);
    newOrder.status = "EXECUTED";

    portfolio[order.symbol] =
      (portfolio[order.symbol] || 0) + order.quantity;
  }

  return newOrder;
}

module.exports = { placeOrder };
