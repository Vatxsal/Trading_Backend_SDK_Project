const express = require("express");
const router = express.Router();
const { orders } = require("../data/store");
const { placeOrder } = require("../services/orderService");

router.get("/", (req, res) => {
  res.json(Object.values(orders));
});

router.post("/", (req, res) => {
  try {
    const order = placeOrder(req.body);
    res.status(201).json(order);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.get("/:orderId", (req, res) => {
  const order = orders[req.params.orderId];
  if (!order) {
    return res.status(404).json({ error: "Order not found" });
  }
  res.json(order);
});

module.exports = router;
