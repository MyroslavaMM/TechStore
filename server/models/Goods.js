import { Schema, model } from "mongoose";

const goodsSchema = new Schema({
  title: String,
  brand: String,
  category: String,
  price: Number,
  description: String
});

const Goods = model("Goods", goodsSchema);
export default Goods;
