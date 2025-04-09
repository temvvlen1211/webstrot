import productModel from "../models/productModel.js";
export const getProduct = async () => {
  const product = await productModel.find({});
  return product;
};

export const getProductById = async (id) => {
  return await productModel.findById(id);
};

export const createProduct = async (title) => {
  console.log(title);
  return await productModel.create(title);
};

export const updateProduct = async (id) => {
  return await productModel.findByIdAndUpdate(id, { new: true });
};

export const deleteProduct = async (id) => {
  return await productModel.findByIdAndDelete(id);
};
