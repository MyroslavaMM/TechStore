import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllGoods, selectAllGoods, addToBag } from "../../reducers/goodsReducer/index.js";
import { Link } from "react-router-dom";
import Tablet from "../../images/tablet.webp";
import "./index.css";

function TabletPage() {
  const dispatch = useDispatch();
  const goods = useSelector(selectAllGoods);

  useEffect(() => {
    dispatch(getAllGoods());
  }, []);

  const handleAddToBag = (id, title, price) => {
    dispatch(addToBag({ id: id, title: title, price: price }));
  };

  const desktopCategoryOptions = goods.filter((good) => good.category === "Планшети");

  const renderOptions = () => {
    return desktopCategoryOptions.map(({ _id, title, price }) => {
      return (
        <div className="good" key={title}>
          <img src={Tablet} className="good-tablet" />
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

export default TabletPage;
