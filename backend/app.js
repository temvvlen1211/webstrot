import express from "express";
import productrouter from "./routers/productsrouter.js";
import cors from "cors";

export const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/products", productrouter);
export default app;
