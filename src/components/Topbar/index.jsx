import React from "react";
import { useSelector } from "react-redux";
import { FiSearch, FiShoppingBag } from "react-icons/fi";

import "./style.css";

export default function Topbar() {
  const { cart } = useSelector((state) => state);

  return (
    <header className="topbar">
      <div className="container">
        <div className="topbar__default">
          <div className="topbar__logo">
            <h1 className="logo__name">Fashionista Store</h1>
          </div>

          <div className="topbar__menu">
            <button className="menu__icon--search">
              <FiSearch />
            </button>
            <button className="menu__icon--cart">
              {cart.amount > 0 && (
                <sup className="menu__counter">{cart.amount}</sup>
              )}
              <FiShoppingBag />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
