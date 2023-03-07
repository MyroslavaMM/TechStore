import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getAllClients = createAsyncThunk("clients/getAllClients", async () => {
  try {
    const response = await axios.get("http://localhost:8080/api/clients");
    return response.data;
  } catch (error) {
    throw new Error("Not able to fetch clients");
  }
});

export const createClient = createAsyncThunk("clients/createClient", async (client) => {
  const { name, email, password } = client;
  try {
    const response = await axios.post("http://localhost:8080/api/clients", { name, email, password });
    return response.data;
  } catch (error) {
    throw new Error("Not able to create a client");
  }
});

export const createClientGoods = createAsyncThunk("clients/createClientGoods", async (client) => {
  const { id, goods } = client;
  try {
    const response = await axios.post(`http://localhost:8080/api/clients`, { id, goods });
    return response.data;
  } catch (error) {
    throw new Error("Not able to add a client");
  }
});

const clientsSlice = createSlice({
  name: "clientsSlice",
  initialState: {
    clients: []
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllClients.fulfilled, (state, action) => {
      state.clients = action.payload;
    });
    builder.addCase(createClient.fulfilled, (state, action) => {
      state.clients.unshift(action.payload);
    });
  }
});

export default clientsSlice.reducer;

export const selectAllClients = (state) => {
  return state.clientsReducer.clients;
};
