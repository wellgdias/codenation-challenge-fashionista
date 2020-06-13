import React from "react";
import { useSelector } from "react-redux";

import ProductDrawer from "../ProductDrawer";

import "./style.css";

export default function DrawerCart() {
  const { cart } = useSelector((state) => state);

  return (
    <div className="cart">
      <div className="cart__products">
        {cart.products.length === 0 ? (
          <p className="products__empty">
            Nenhum produto adicionado à sacola :(
          </p>
        ) : (
          cart.products.map((product) => (
            <ProductDrawer key={product.id} product={product} />
          ))
        )}
      </div>
    </div>
  );
}
