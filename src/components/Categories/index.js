import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectAllGoods } from "../../reducers/goodsReducer/index.js";
import "./index.css";

function Categories() {
  const goods = useSelector(selectAllGoods);

  let categories = [...new Set(goods.map((good) => good.category))];

  const renderCategories = () => {
    return categories.map((category, index) => {
      return (
        <li className="category-item" key={index}>
          <Link to={`/catalog/${category}`} className="category-link">
            {category}
          </Link>
        </li>
      );
    });
  };

  return (
    <div className="category">
      <p className="category-title">КАТЕГОРІЇ</p>
      <ul className="category-nav">{renderCategories()}</ul>
    </div>
  );
}

export default Categories;
