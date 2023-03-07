import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { getAllGoods } from "../../reducers/goodsReducer/index.js";
import { getAllClients } from "../../reducers/clientsReducer/index.js";
import HomePage from "../HomePage/index.js";
import Header from "../Header/index.js";
import Footer from "../Footer/index.js";
import UserRoom from "../UserRoom/index.js";
import ShopBag from "../ShopBag/index.js";
import RegistrationPage from "../RegistrationPage/index.js";
import GoodsPage from "../GoodsPage/index.js";
import Catalog from "../Catalog/index.js";
import CatalogComponent from "../CatalogComponents/index.js";
import GoodItem from "../GoodItem/index.js";
import "./App.css";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllGoods());
    dispatch(getAllClients());
  }, []);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/my-room" element={<UserRoom />} />
        <Route path="/shop-bag" element={<ShopBag />} />
        <Route path="/registration" element={<RegistrationPage />} />
        <Route path="/goods" element={<GoodsPage />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/catalog/:category" element={<CatalogComponent />} />
        <Route path="/:id" element={<GoodItem />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
