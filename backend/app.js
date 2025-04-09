import express from "express";
import productRouter from "./routers/productsRouter.js";

export const app = express();
app.use(express.json());

app.use("/api/products", productRouter);
export default app;
