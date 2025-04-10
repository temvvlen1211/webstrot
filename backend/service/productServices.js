import productModel from "../models/productmodel.js";
export const getProduct = async () => {
  const product = await productModel.find({});
  return product;
};

export const getProductById = async (id) => {
  return await productModel.findById(id);
};

export const createProduct = async (data) => {
  return await productModel.create(data);
};

export const updateProduct = async (baraa) => {
  const { id, ...updatingObj } = baraa;
  return await productModel.findByIdAndUpdate(id, updatingObj, { new: true });
};

export const deleteProduct = async (id) => {
  return await productModel.findByIdAndDelete(id);
};
