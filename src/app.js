const express = require("express");

const instrumentRoutes = require("./routes/instruments");
const orderRoutes = require("./routes/orders");
const tradeRoutes = require("./routes/trades");
const portfolioRoutes = require("./routes/portfolio");

const app = express();
app.use(express.json());

app.use("/api/v1/instruments", instrumentRoutes);
app.use("/api/v1/orders", orderRoutes);
app.use("/api/v1/trades", tradeRoutes);
app.use("/api/v1/portfolio", portfolioRoutes);

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
