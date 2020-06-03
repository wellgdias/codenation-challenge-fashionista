import React from "react";
import { FiSearch, FiShoppingBag } from "react-icons/fi";

import "./style.css";

export default function Topbar() {
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
              <FiShoppingBag />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
