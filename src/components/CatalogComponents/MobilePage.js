import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllGoods, selectAllGoods, addToBag, OPTIONS } from "../../reducers/goodsReducer/index.js";
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

  const renderOptions = () => {
    return Object.values(OPTIONS).map((optionItem) => (
      <option key={optionItem} value={optionItem}>
        {optionItem}
      </option>
    ));
  };

  const handleSort = (event) => {
    dispatch(getAllGoods(event.target.value));
  };

  const mobileCategoryOptions = goods.filter((good) => good.category === "Мобільні телефони");

  const renderItems = () => {
    return mobileCategoryOptions.map(({ _id, title, price }) => {
      return (
        <div className="good" key={title}>
          <img src={phoneImage} className="good-img" />
          <Link to={`/${_id}`} className="good-title">
            {title}
          </Link>
          <p className="good-price">{price}</p>
          <button className="submit" onClick={() => handleAddToBag(_id, title, price)}>
            Додати до корзини
          </button>
        </div>
      );
    });
  };
  return (
    <>
      <div className="sorting">
        <select className="sorting-select" onChange={handleSort}>
          {renderOptions()}
        </select>
      </div>
      <div className="good-block">{renderItems()}</div>
    </>
  );
}

export default MobilePage;
