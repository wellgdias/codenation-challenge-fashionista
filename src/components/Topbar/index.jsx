import React from "react";
import { useHistory } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { FiSearch, FiShoppingBag } from "react-icons/fi";

import Button from "../Button";

import { setOpenDrawer } from "../../actions";

import "./style.css";

export default function Topbar() {
  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();
  const history = useHistory();

  function handleOnClickOpenDrawer(receiver) {
    dispatch(setOpenDrawer(receiver));
  }

  function handleClickHome() {
    history.push("/");
  }

  return (
    <header className="topbar">
      <div className="container">
        <div className="topbar__default">
          <div className="topbar__logo">
            <h1 className="logo__name" onClick={handleClickHome}>
              Fashionista Store
            </h1>
          </div>

          <div className="topbar__menu">
            <Button
              className="button__icon icon--search"
              onClick={() => handleOnClickOpenDrawer("filter")}
            >
              <FiSearch />
            </Button>
            <Button
              className="button__icon icon--cart"
              onClick={() => handleOnClickOpenDrawer("cart")}
            >
              {cart.amount > 0 && (
                <sup className="icon__counter">{cart.amount}</sup>
              )}
              <FiShoppingBag />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
