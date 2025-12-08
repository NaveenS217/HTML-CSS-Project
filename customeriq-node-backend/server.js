import express from "express";
import cors from "cors";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
app.use(cors());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function loadJSON(filename) {
  return JSON.parse(fs.readFileSync(path.join(__dirname, "data", filename), "utf8"));
}

app.get("/api/performance", (req, res) => res.json(loadJSON("Performance.json")));
app.get("/api/journey", (req, res) => res.json(loadJSON("customerJourney.json")));
app.get("/api/operations", (req, res) => res.json(loadJSON("operations.json")));
app.get("/api/revenue", (req, res) => res.json(loadJSON("revenue.json")));

app.listen(5000, () => console.log("Node backend running at http://localhost:5000"));
