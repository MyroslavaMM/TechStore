import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllGoods, selectAllGoods, addToBag } from "../../reducers/goodsReducer/index.js";
import { Link } from "react-router-dom";
import phoneImage from "../../images/phone.webp";
import "./index.css";

function MobilePage() {
  const dispatch = useDispatch();
  const goods = useSelector(selectAllGoods);

  useEffect(() => {
    dispatch(getAllGoods());
  }, []);

  const handleAddToBag = (id, title, price) => {
    dispatch(addToBag({ id: id, title: title, price: price }));
  };

  const mobileCategoryOptions = goods.filter((good) => good.category === "Мобільні телефони");

  const renderOptions = () => {
    return mobileCategoryOptions.map(({ _id, title, price }) => {
      return (
        <div className="good" key={title}>
          <img src={phoneImage} className="good-img" />
          <Link className="good-title">{title}</Link>
          <p className="good-price">{price}</p>
          <button className="submit" onClick={() => handleAddToBag(_id, title, price)}>
            Додати до корзини
          </button>
        </div>
      );
    });
  };
  return <div className="good-block">{renderOptions()}</div>;
}

export default MobilePage;
