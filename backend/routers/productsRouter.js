import express from "express";

import {
  getProduct,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../service/productServices.js";
const productRouter = express.Router();

productRouter.get("/", async (req, res) => {
  console.log(req.body);

  res.json(await getProduct());
});

productRouter.get("/:id", async (req, res) => {
  const { id } = req.params;
  res.json(await getProductById(id));
});

productRouter.post("/", async (req, res) => {
  const basket = req.body;
  res.json(await createProduct(basket));
});

productRouter.put("/:id", async (req, res) => {
  const { id } = req.params;
  const pro = req.body;
  console.log(pro);
  console.log(id);

  res.json(await updateUser(id, pro));
});
productRouter.delete("/:id", async (req, res) => {
  const { id } = req.params;
  res.json(await deleteProduct(id));
});

export default productRouter;
