import express from "express";

import {
  getProduct,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../service/productservices.js";
const productRouter = express.Router();

productRouter.get("/", async (req, res) => {
  console.log("get:", req.body);
  res.json(await getProduct());
});

productRouter.get("/:id", async (req, res) => {
  const { id } = req.params;
  console.log("get id:", req.body);

  res.json(await getProductById(id));
});

productRouter.post("/", async (req, res) => {
  const data = req.body;
  console.log("post data: ", data);

  res.json(await createProduct(data));
});

productRouter.put("/:id", async (req, res) => {
  const { id } = req.params;
  const body = req.body;
  console.log("put data: ", body);

  try {
    const baraa = await updateProduct({
      id,
      ...body,
    });

    res.json(baraa);
  } catch (err) {
    console.log(err);

    res.status(500).json({ err: "Server error" });
  }
});
productRouter.delete("/:id", async (req, res) => {
  const { id } = req.params;
  console.log("delete _id", req.params.id);

  res.json(await deleteProduct(id));
});

export default productRouter;
