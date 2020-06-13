import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FiX } from "react-icons/fi";

import Button from "../Button";
import DrawerFilter from "../DrawerFilter";
import DrawerCart from "../DrawerCart";

import { setOpenDrawer, setValueFilter } from "../../actions";
import { numberFormatter } from "../../utils";

import "./style.css";

export default function SlideDrawer() {
  const { cart, drawer } = useSelector((state) => state);
  const dispatch = useDispatch();

  function handleOnClickCloseDrawer() {
    dispatch(setOpenDrawer());
    dispatch(setValueFilter(""));
  }

  const drawerClasses = drawer.open ? "drawer is-open" : "drawer";

  return (
    <div className={drawerClasses}>
      <div className="drawer__container">
        <header className="drawer__header">
          <Button
            className="button__icon"
            onClick={() => handleOnClickCloseDrawer()}
          >
            <FiX />
          </Button>

          {drawer.receiver === "cart" ? (
            <h3 className="drawer__name">{`Sacola (${cart.amount})`}</h3>
          ) : (
            <h3 className="drawer__name">Buscar Produtos</h3>
          )}
        </header>
        <div className="drawer__content">
          {drawer.receiver === "cart" ? (
            <>
              <DrawerCart />
              <footer className="drawer__footer">
                SubTotal: {numberFormatter.format(cart.total)}
              </footer>
            </>
          ) : (
            <DrawerFilter />
          )}
        </div>
      </div>
    </div>
  );
}
