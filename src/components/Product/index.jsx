import React from "react";
import { Link } from "react-router-dom";

import "./style.css";

export default function Product(product) {
  const {
    discount_percentage,
    image,
    name,
    regular_price,
    actual_price,
  } = product.data;

  // Mover a função para um "utils"
  const productAddress = name
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/ /g, "-")
    .toLowerCase();

  return (
    <>
      <div className="product__info">
        <Link to={`/produto/${productAddress}`}>
          <figure className="product__image">
            {discount_percentage && (
              <span className="product__discount">-{discount_percentage}</span>
            )}

            {image ? (
              <img src={image} alt={name} />
            ) : (
              <img
                src="https://via.placeholder.com/470x594/FFFFFF/?text=Imagem+Indisponível"
                alt={name}
              />
            )}
          </figure>
        </Link>
        <h3 className="product__name">{name}</h3>
        <div className="product__pricing">
          {regular_price === actual_price ? (
            <span className="product__price product__price--to">
              {regular_price}
            </span>
          ) : (
            <>
              <span className="product__price product__price--from">
                {regular_price}
              </span>
              <span className="product__price product__price--to">
                {actual_price}
              </span>
            </>
          )}
        </div>
      </div>
    </>
  );
}
