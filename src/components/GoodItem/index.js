import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectAllGoods } from "../../reducers/goodsReducer/index.js";
import "./index.css";

function GoodItem() {
  const goods = useSelector(selectAllGoods);
  const { id } = useParams();

  const good = goods.find(({ _id }) => _id === id);

  if (!good) {
    return <p>Оформлення товару ще не зроблено</p>;
  }
  return (
    <div className="goods-block">
      <p className="goods-title">{good.title}</p>
      <p className="good-price">Ціна: {good.price}</p>
    </div>
  );
}

export default GoodItem;
