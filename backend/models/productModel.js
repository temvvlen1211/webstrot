import mongoose from "mongoose";

const Product = {
  image: { type: String, required: false },
  rating: { type: Number },
  name: { type: String, required: [true, "Please enter product name"] },
  price: { type: Number, required: true, default: 0 },
};
const ProductSchema = new mongoose.Schema(Product, { timestamps: true });
const productModel = mongoose.model("Product", ProductSchema);

export default productModel;
