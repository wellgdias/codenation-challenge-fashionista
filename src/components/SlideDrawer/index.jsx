import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FiArrowLeft } from "react-icons/fi";

import Button from "../Button";
import DrawerFilter from "../DrawerFilter";
import DrawerCart from "../DrawerCart";

import { setOpenDrawer } from "../../actions";

import "./style.css";

export default function SlideDrawer() {
  const { cart, drawer } = useSelector((state) => state);
  const dispatch = useDispatch();

  function handleOnClickCloseDrawer() {
    dispatch(setOpenDrawer());
  }

  const drawerClasses = drawer.open ? "side__drawer is-open" : "side__drawer";

  return (
    <div className={drawerClasses}>
      <div className="side__container">
        <header className="side__header">
          <Button
            className="button__icon"
            onClick={() => handleOnClickCloseDrawer()}
          >
            <FiArrowLeft />
          </Button>

          {drawer.receiver === "cart" ? (
            <h3 className="side__name">{`Sacola (${cart.amount})`}</h3>
          ) : (
            <h3 className="side__name">Buscar Produtos</h3>
          )}
        </header>
        {drawer.receiver === "cart" ? <DrawerCart /> : <DrawerFilter />}
      </div>
    </div>
  );
}
