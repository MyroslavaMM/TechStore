import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectAddToBag } from "../../reducers/goodsReducer/index.js";
import { ReactComponent as Logo } from "../../images/logo.svg";
import { ReactComponent as ShopBag } from "./shop-bag.svg";

import "./index.css";

function Header() {
  const bagItems = useSelector(selectAddToBag);
  window.localStorage.getItem("user");

  return (
    <div className="header">
      <div className="header-navigation-block">
        <Link to="" className="header-logo">
          <Logo />
        </Link>
        <nav className="nav">
          <ul className="menu">
            <li className="menu-item">
              <Link to={"/catalog"} className="link">
                Каталог
              </Link>
            </li>
            {window.localStorage.getItem("user") === null ? (
              <li className="menu-item">
                <Link to={"/registration"} className="link">
                  Зареєструватися
                </Link>
              </li>
            ) : (
              ""
            )}
            <li className="menu-item">
              <Link to={"/my-room"} className="link">
                Мій кабінет
              </Link>
            </li>
            <li className="menu-item">
              <Link href="#" className="link">
                Контакти
              </Link>
            </li>
          </ul>
        </nav>
        <Link to={"/shop-bag"} className="header-shop-bag">
          <ShopBag />
          <p className="shop-bag-count">{bagItems.length > 0 ? bagItems.length : ""}</p>
        </Link>
      </div>
    </div>
  );
}

export default Header;
