import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage/index.js";
import Header from "./components/Header/index.js";
import Footer from "./components/Footer/index.js";
import UserRoom from "./components/UserRoom/index.js";
import ShoppingBag from "./components/ShoppingBag/index.js";
import RegistrationPage from "./components/RegistrationPage/index.js";
import GoodsPage from "./components/GoodsPage/index.js";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/room" element={<UserRoom />} />
        <Route path="/bag" element={<ShoppingBag />} />
        <Route path="/registration" element={<RegistrationPage />} />
        <Route path="/goods" element={<GoodsPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
