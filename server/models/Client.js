import { Schema, model } from "mongoose";

const clientSchema = new Schema({
  name: String,
  email: String,
  password: String
});

const Client = model("Client", clientSchema);
export default Client;
