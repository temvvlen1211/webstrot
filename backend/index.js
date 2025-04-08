import express from "express";
import mongoose from "mongoose";
import Product from "./models/product.model.js";
const app = express();
app.use(express.json());

const PORT = 8080;

app.get("/", (req, res) => {
  res.send("Server is running with ES modules 🚀");
});

app.post("/api/products", async (req, res) => {
  try {
    const product = new Product(req.body);
    const savedProduct = await product.save();
    res.status(201).json(savedProduct);
    console.log(req.body);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

mongoose
  .connect(
    "mongodb+srv://temvvlen1211:vNBGhiIibP9B0RjN@jyotish.dkmaymr.mongodb.net/shop"
  )
  .then(() => console.log("✅ Connected to database"))
  .catch((err) => {
    console.error("❌ Connection failed:", err.message);
  });

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
