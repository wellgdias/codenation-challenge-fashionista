import React from "react";

import "./style.css";

export default function ProductName(props) {
  const pathname = window.location.pathname;

  return (
    <>
      {pathname === "/" ? (
        <h4 className="product__name">{props.children}</h4>
      ) : (
        <h2 className="product__name">{props.children}</h2>
      )}
    </>
  );
}
