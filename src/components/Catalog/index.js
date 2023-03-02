import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllGoods, selectAllGoods } from "../../reducers/goodsReducer/index.js";
import "./index.css";

function Catalog() {
  const dispatch = useDispatch();
  const goods = useSelector(selectAllGoods);

  useEffect(() => {
    dispatch(getAllGoods());
  }, []);

  const renderCategories = () => {
    return goods.map(({ category }) => {
      return (
        <li className="category-item" key={category}>
          <a className="category-link">{category}</a>
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

export default Catalog;
