import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import Image from "../Image";
import Price from "../Price";
import ProductName from "../ProductName";

import { setProductInfo } from "../../actions";

import "./style.css";

export default function Product(product) {
  const {
    id,
    discount_percentage,
    image,
    name,
    regular_price,
    actual_price,
  } = product.data;

  const dispatch = useDispatch();

  // Mover a função para um "utils"
  const path = name
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/ /g, "-")
    .toLowerCase();

  function handleSetProductId() {
    dispatch(setProductInfo(id));
  }

  return (
    <div className="product__info">
      <Link to={`/produto/${path}`} onClick={handleSetProductId}>
        <Image image={image} name={name} discount={discount_percentage} />
      </Link>
      {/* Usar selector para definir local para usar na formatação do name e price */}
      <ProductName name={name} />
      <Price regular={regular_price} atual={actual_price} />
    </div>
  );
}
