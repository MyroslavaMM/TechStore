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
    origin: "http://192.168.31.106:3000"
  })
);
app.use(express.static("public"));

app.get("/api/clients", async (req, res) => {
  const clients = await Client.find({});
  console.log(clients);
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.send(clients);
});

app.post("/api/clients", async (req, res) => {
  const emailRegExp = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
  const clientRequest = req.body;
  try {
    const newClient = new Client({ ...clientRequest });
    const saveClient = await newClient.save();
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
    res.send(saveClientGoods);
  } catch (error) {
    res.status(422).send("Not able to add a client");
  }
});

app.listen(8080, () => {
  console.log("Server listening on 8080");
});
