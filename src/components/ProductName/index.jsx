import React from "react";

import "./style.css";

export default function ProductName({ name, local }) {
  return (
    <>
      {local === "Home" ? (
        <h4 className="product__name">{name}</h4>
      ) : (
        <h2 className="product__name">{name}</h2>
      )}
    </>
  );
}
