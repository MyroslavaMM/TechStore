import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllGoods, selectAllGoods } from "../../reducers/goodsReducer/index.js";
import "./index.css";

function Categories() {
  const dispatch = useDispatch();
  const goods = useSelector(selectAllGoods);

  useEffect(() => {
    dispatch(getAllGoods());
  }, []);

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
