import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import Image from "../Image";
import Price from "../Price";
import ProductName from "../Name";

import { setProductInfo } from "../../actions";
import { createPath } from "../../utils";

import "./style.css";

export default function Product({ product }) {
  const {
    id,
    discount_percentage,
    image,
    name,
    regular_price,
    actual_price,
  } = product;

  const dispatch = useDispatch(); // Mover a função para um "utils"
  const path = createPath(name);

  function handleSetProductId(id) {
    dispatch(setProductInfo(id));
    
  }

  return (
    <div className="product__info">
      <Link to={`/produto/${path}`} onClick={() => handleSetProductId(id)}>
        <Image image={image} name={name} discount={discount_percentage} />
      </Link>
      <ProductName>{name}</ProductName>
      <Price regular={regular_price} atual={actual_price} />
    </div>
  );
}
