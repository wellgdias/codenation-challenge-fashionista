import React from "react";
import { useSelector } from "react-redux";

import "./style.css";

export default function Price({ regular, atual, installments }) {
  const { local } = useSelector((state) => state);

  const product__pricing =
    local === "Home" ? "product__pricing--home" : "product__pricing--product";

  const product__price =
    local === "Home" ? "product__price--home" : "product__price--product";

  const price__from =
    local === "Home" ? "price__from--home" : "price__frome--product";

  return (
    <div className={product__pricing}>
      {regular === atual ? (
        <>
          <span className={`${product__price} product__price--to`}>
            {regular}
          </span>
          {installments && (
            <span className="product__installments">em até {installments}</span>
          )}
        </>
      ) : (
        <>
          <span className={`${product__price} ${price__from}`}>{regular}</span>
          <span className={`${product__price} product__price--to`}>
            {atual}
          </span>
          {installments && (
            <span className="product__installments">em até {installments}</span>
          )}
        </>
      )}
    </div>
  );
}
