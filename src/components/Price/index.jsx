import React from "react";

import "./style.css";

export default function Price({ regular, atual }) {
  return (
    <div className="product__pricing">
      {regular === atual ? (
        <span className="product__price product__price--to">{regular}</span>
      ) : (
        <>
          <span className="product__price product__price--from">{regular}</span>
          <span className="product__price product__price--to">{atual}</span>
        </>
      )}
    </div>
  );
}
