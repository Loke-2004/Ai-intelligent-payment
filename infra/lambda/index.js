const { DynamoDBClient } = require("@aws-sdk/client-dynamodb");
const { DynamoDBDocumentClient, PutCommand, ScanCommand } = require("@aws-sdk/lib-dynamodb");

const client = new DynamoDBClient({});
const docClient = DynamoDBDocumentClient.from(client);

const TABLE_NAME = process.env.TABLE_NAME;

exports.handler = async (event) => {
  console.log("Event:", JSON.stringify(event));

  const method = event.httpMethod;
  const path = event.path;

  try {
    if (method === "POST") {
      const body = JSON.parse(event.body || "{}");
      const { amount, currency = "INR", method: userMethod } = body;

      // 1. AI Fraud Prediction Logic (Simulated)
      // High amounts or specific patterns trigger higher risk scores
      const fraudScore = calculateFraudScore(amount, userMethod);
      const riskStatus = fraudScore > 80 ? "Blocked" : fraudScore > 50 ? "Suspicious" : "Safe";

      // 2. Intelligent Routing Logic (Simulated)
      // Select best route based on cost and success rate
      let selectedRoute = "UPI";
      let feeSaved = 0;

      if (riskStatus !== "Blocked") {
        const routing = optimizeRouting(amount, userMethod);
        selectedRoute = routing.route;
        feeSaved = routing.feeSaved;
      }

      const transaction = {
        id: `TXN-${Math.floor(1000 + Math.random() * 9000)}`,
        amount: `₹${amount.toLocaleString()}`,
        status: riskStatus,
        route: selectedRoute,
        fraudScore,
        feeSaved,
        timestamp: new Date().toISOString(),
      };

      // 3. Save to DynamoDB
      await docClient.send(new PutCommand({
        TableName: TABLE_NAME,
        Item: transaction
      }));

      return {
        statusCode: 200,
        headers: { "Access-Control-Allow-Origin": "*" },
        body: JSON.stringify({ message: "Transaction processed", transaction }),
      };
    }

    if (method === "GET") {
      const data = await docClient.send(new ScanCommand({ TableName: TABLE_NAME }));
      return {
        statusCode: 200,
        headers: { "Access-Control-Allow-Origin": "*" },
        body: JSON.stringify(data.Items),
      };
    }

    return {
      statusCode: 405,
      body: JSON.stringify({ message: "Method not allowed" }),
    };
  } catch (err) {
    console.error(err);
    return {
      statusCode: 500,
      headers: { "Access-Control-Allow-Origin": "*" },
      body: JSON.stringify({ message: "Internal server error", error: err.message }),
    };
  }
};

function calculateFraudScore(amount, method) {
  let score = Math.floor(Math.random() * 20); // Base noise
  if (amount > 50000) score += 40;
  if (amount > 100000) score += 30;
  if (method === "Wallet") score += 15;
  return Math.min(score, 100);
}

function optimizeRouting(amount, preferredMethod) {
  // Logic: Prefer UPI for small-medium, Cards for large with reward optimization
  if (amount < 2000) {
    return { route: "UPI", feeSaved: 12 };
  } else if (amount < 10000) {
    return { route: "NetBanking", feeSaved: 8 };
  } else {
    return { route: "Card (Premium Optimizer)", feeSaved: 25 };
  }
}
