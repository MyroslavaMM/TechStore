import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllGoods, selectAllGoods, addToBag, OPTIONS } from "../../reducers/goodsReducer/index.js";
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

  const desktopCategoryOptions = goods.filter((good) => good.category === "Планшети");

  const renderItems = () => {
    return desktopCategoryOptions.map(({ _id, title, price }) => {
      return (
        <div className="good" key={title}>
          <img src={Tablet} className="good-tablet" />
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

export default TabletPage;
