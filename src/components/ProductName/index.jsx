import React from "react";
import { useSelector } from "react-redux";

import "./style.css";

export default function ProductName({ name }) {
  const { local } = useSelector((state) => state);

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
