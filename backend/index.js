import mongoose from "mongoose";
import { env } from "./config/env.js";
import app from "./app.js";

const PORT = env.PORT || 8080;
const url = env.MONGODB_URL || "mongodb://localhost:27017/";

mongoose
  .connect(url)
  .then(() => console.log("✅ Connected to database"))
  .catch((err) => {
    console.error("❌ Connection failed:", err.message);
  });

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
