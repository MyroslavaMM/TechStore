import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectAddToBag, removeBagItem } from "../../reducers/goodsReducer/index.js";
import "./index.css";

function ShopBag() {
  const dispatch = useDispatch();
  const bagGoods = useSelector(selectAddToBag);

  const handleRemoveBagItem = (id) => {
    dispatch(removeBagItem(id));
  };

  const renderBagFood = () => {
    return bagGoods.map(({ id, title, price }) => {
      return (
        <li key={id} className="bag-item">
          <Link to={`/${id}`} className="bag-item-title">
            {title}
          </Link>
          <p>{price}</p>
          <div className="button-block">
            <button className="submit" onClick={() => handleRemoveBagItem(id)}>
              Видалити з кошика
            </button>
          </div>
        </li>
      );
    });
  };

  if (bagGoods.length === 0) {
    return (
      <div className="bag-list-block">
        <p className="bag-title">Кошик порожній</p>
      </div>
    );
  }

  return (
    <div className="bag-list-block">
      <p className="bag-title">Кошик</p>
      <ul className="bag-list">{renderBagFood()}</ul>
    </div>
  );
}

export default ShopBag;
