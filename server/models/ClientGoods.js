import { Schema, model } from "mongoose";

const clientGoodsSchema = new Schema({
  clientId: String,
  goods: Array
});

const ClientGoods = model("ClientGoods", clientGoodsSchema);
export default ClientGoods;
