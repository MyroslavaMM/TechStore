import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import axios from "axios";
import "./database.js";
import Client from "./models/Client.js";
import Goods from "./models/Goods.js";
import ClientGoods from "./models/ClientGoods.js";

const app = express();

app.use(
  cors({
    origin: "*"
  })
);
app.use(express.static("public"));
app.use(express.json());

app.get("/api/clients", async (req, res) => {
  const clients = await Client.find({});
  res.header({
    "Access-Control-Allow-Origin": "http://localhost:3000",
    "Access-Control-Allow-Methods": "POST, PUT, PATCH, GET, DELETE, OPTIONS",
    "Access-Control-Allow-Headers": "Origin, X-Api-Key, X-Requested-With, Content-Type, Accept, Authorization"
  });
  res.send(clients);
});

app.post("/api/clients", async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const newClient = new Client({
      name: name,
      email: email,
      password: password
    });
    const saveClient = await newClient.save();
    res.header({
      "Access-Control-Allow-Origin": "http://localhost:3000",
      "Access-Control-Allow-Methods": "POST, PUT, PATCH, GET, DELETE, OPTIONS",
      "Access-Control-Allow-Headers": "Origin, X-Api-Key, X-Requested-With, Content-Type, Accept, Authorization"
    });
    res.send(saveClient);
  } catch (error) {
    res.status(422).send("Not able to add a client");
  }
});

app.post("/api/clients", async (req, res) => {
  const clientRequest = req.body;
  try {
    const newClientGoods = new ClientGoods({ ...clientRequest });
    const saveClientGoods = await newClientGoods.save();
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.send(saveClientGoods);
  } catch (error) {
    res.status(422).send("Not able to add a client");
  }
});

app.get("/api/goods", async (req, res) => {
  const goods = await Goods.find({});
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.send(goods);
});

app.listen(8080, () => {
  console.log("Server listening on 8080");
});
