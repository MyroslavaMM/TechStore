import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage/index.js";
import Header from "./components/Header/index.js";
import Footer from "./components/Footer/index.js";
import UserRoom from "./components/UserRoom/index.js";
import ShopBag from "./components/ShopBag/index.js";
import RegistrationPage from "./components/RegistrationPage/index.js";
import GoodsPage from "./components/GoodsPage/index.js";
import Catalog from "./components/Catalog/index.js";
import MobilePage from "./components/CatalogComponents/MobilePage.js";
import TabletPage from "./components/CatalogComponents/TabletPage.js";
import "./App.css";

function App() {
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
        <Route path="/catalog/Мобільні телефони" element={<MobilePage />} />
        <Route path="/catalog/Планшети" element={<TabletPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
