import mongoose from "mongoose";
import Client from "./models/Client.js";
import Goods from "./models/Goods.js";
const uri = `mongodb+srv://myroslavamarm:YAOq4lgkzN1v7Lt9@cluster0.xoils8z.mongodb.net/?retryWrites=true&w=majority`;

mongoose.connect(uri);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});
