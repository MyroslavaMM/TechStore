import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getAllGoods = createAsyncThunk("goods/getAllGoods", async () => {
  try {
    const response = await axios.get("http://localhost:8080/api/goods");
    console.log(response.data);
    return response.data;
  } catch (error) {
    throw new Error("Not able to fetch goods");
  }
});

const goodsSlice = createSlice({
  name: "goodsSlice",
  initialState: {
    goods: []
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllGoods.fulfilled, (state, action) => {
      state.goods = action.payload;
    });
  }
});

export default goodsSlice.reducer;

export const selectAllGoods = (state) => {
  return state.goodsReducer.goods;
};
