import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const OPTIONS = {
  DEFAULT: "Сортувати",
  DESC: "Від дорогих до дешевих",
  ASC: "Від дешевих до дорогих"
};

const bagItems = localStorage.getItem("bagItem") !== null ? JSON.parse(localStorage.getItem("bagItem")) : [];

export const getAllGoods = createAsyncThunk("goods/getAllGoods", async (sort) => {
  try {
    const response = await axios.get(`http://localhost:8080/api/goods?sort=${sort}`);
    return response.data;
  } catch (error) {
    throw new Error("Not able to fetch goods");
  }
});

const goodsSlice = createSlice({
  name: "goodsSlice",
  initialState: {
    goods: [],
    bag: bagItems
  },
  reducers: {
    addToBag(state, action) {
      const { id, title, price } = action.payload;
      state.bag.push({ id: id, title: title, price: price });

      localStorage.setItem("bagItem", JSON.stringify(state.bag.map((item) => item)));
    },
    removeBagItem(state, action) {
      state.bag = state.bag.filter(({ id }) => id !== action.payload);

      localStorage.setItem("bagItem", JSON.stringify(state.bag.map((item) => item)));
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getAllGoods.fulfilled, (state, action) => {
      state.goods = action.payload;
    });
  }
});

export default goodsSlice.reducer;
export const { addToBag, removeBagItem } = goodsSlice.actions;

export const selectAllGoods = (state) => {
  return state.goodsReducer.goods;
};

export const selectAddToBag = (state) => {
  return state.goodsReducer.bag;
};
