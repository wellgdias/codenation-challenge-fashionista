import React from "react";

import "./style.css";

export default function Image({ image, name, discount }) {
  return (
    <figure className="product__image">
      {discount && <span className="product__discount">-{discount}</span>}

      {image ? (
        <img src={image} alt={name} />
      ) : (
        <img
          src="https://via.placeholder.com/470x594/FFFFFF/?text=Imagem+Indisponível"
          alt={name}
        />
      )}
    </figure>
  );
}
