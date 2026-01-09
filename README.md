# Trading Backend & SDK Assignment – (Bajaj Broking)

## 📌 Overview
This project is a **simplified trading backend system** built as part of the Bajaj Broking campus hiring assignment.  
It demonstrates core **backend system design**, **REST API development**, and **fundamental trading workflows** such as order placement, trade execution, and portfolio management.

The system simulates a real-world stock trading platform using **in-memory storage** without any live market connectivity.

---

## Technology Stack
- **Backend:** Node.js (Express.js)
- **API Format:** REST (JSON)
- **Database:** In-memory storage (Objects / Arrays)
- **Authentication:** Mocked (single user)
- **External Market Integration:** Not required

---

## How to Run the Project

### 1️⃣ Install Dependencies
npm install

### 2️⃣ Start the Server
node src/app.js

### 3️⃣ Server will run at
http://localhost:3000

---

## API Endpoints
🔹 1. Fetch Instruments :-

GET /api/v1/instruments

Returns the list of tradable instruments.

🔹 2. Place Order

POST /api/v1/orders

Sample Request (MARKET Order):
json

{
  "symbol": "TCS",
  "orderType": "BUY",
  "orderStyle": "MARKET",
  "quantity": 5
}

Sample Response:
json

{
  "orderId": "uuid",
  "status": "EXECUTED",
  "symbol": "TCS",
  "orderType": "BUY",
  "orderStyle": "MARKET",
  "quantity": 5
}

🔹 3. Fetch All Orders

GET /api/v1/orders

🔹 4. Fetch Order Status

GET /api/v1/orders/{orderId}

🔹 5. Fetch Executed Trades

GET /api/v1/trades

🔹 6. Fetch Portfolio Holdings

GET /api/v1/portfolio

Returns current holdings with calculated average price and current value.

---

## Trading Logic (Simulation)
### MARKET Orders

Executed immediately

Trade is created instantly

Portfolio is updated

### LIMIT Orders

Validated and placed

Not matched/executed (simulation only)

---

## Validations & Error Handling
Quantity must be greater than zero

LIMIT orders require price

Invalid symbols are rejected

Proper HTTP status codes are returned (200, 201, 400, 404)

---

## Wrapper SDK
A lightweight SDK is provided to abstract REST API usage for client applications.

Example SDK methods:

1) getInstruments()

2) placeOrder()

3) getPortfolio()

---

## Sample API Usage
Screenshots demonstrating:

Instrument fetch

Market order placement

Order status

Trade execution

Portfolio update

are included as part of the submission.

---

## Assumptions
Single hardcoded user (mock authentication)

Static instrument prices

In-memory storage (data resets on restart)
