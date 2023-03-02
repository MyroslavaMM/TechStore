import React from "react";
import Categories from "../Categories/index.js";
import "./index.css";

function HomePage() {
  return (
    <div className="App">
      <div className="main">
        <div className="banner">
          <div className="banner-wrap">
            <p className="title">TechStore</p>
            <p className="subtitle">Наші спеціалісти мають великий досвід, наші спеціалісти мають.</p>
          </div>
        </div>
        <Categories />
      </div>
    </div>
  );
}

export default HomePage;
