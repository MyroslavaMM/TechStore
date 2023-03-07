import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectAddToBag } from "../../reducers/goodsReducer/index.js";

function ShopBag() {
  const bagGoods = useSelector(selectAddToBag);

  const renderBagFood = () => {
    return bagGoods.map(({ id, title }) => {
      return (
        <li key={id}>
          <Link>{title}</Link>
        </li>
      );
    });
  };

  if (bagGoods.length === 0) {
    return (
      <div>
        <p>Кошик порожній</p>
      </div>
    );
  }

  return (
    <div>
      <p>Кошик</p>
      <ul>{renderBagFood()}</ul>
    </div>
  );
}

export default ShopBag;
