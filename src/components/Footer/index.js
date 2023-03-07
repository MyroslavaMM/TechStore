import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../images/logo.svg";
import "./index.css";

function Footer() {
  window.localStorage.getItem("user");

  return (
    <div className="footer">
      <div className="footer-block">
        <Link to="" className="header-logo">
          <Logo />
        </Link>
        <nav className="nav">
          <ul className="footer-menu">
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
      </div>
    </div>
  );
}

export default Footer;
