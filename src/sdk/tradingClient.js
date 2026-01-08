const axios = require("axios");

class TradingClient {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  getInstruments() {
    return axios.get(`${this.baseUrl}/api/v1/instruments`);
  }

  placeOrder(order) {
    return axios.post(`${this.baseUrl}/api/v1/orders`, order);
  }

  getPortfolio() {
    return axios.get(`${this.baseUrl}/api/v1/portfolio`);
  }
}

module.exports = TradingClient;
