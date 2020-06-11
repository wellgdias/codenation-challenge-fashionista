import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { setProductCart } from "../../actions";

import Image from "../Image";
import Price from "../Price";
import ProductName from "../Name";
import Button from "../Button";
import Container from "../Container";

import "./style.css";

export default function Product() {
  const [selectedSize, setSelectedSize] = useState();
  const [hasSize, sethasSize] = useState(false);
  const { productDetail } = useSelector((state) => state);
  const dispatch = useDispatch();

  const {
    id,
    image,
    name,
    regular_price,
    actual_price,
    installments,
    sizes,
  } = productDetail;

  function handleClickSize(size) {
    setSelectedSize(size);
    sethasSize(false);
  }

  function isSelected(size) {
    return size === selectedSize
      ? "product__size is-selected"
      : "product__size";
  }

  function handleClickAddCart(id, size) {
    if (selectedSize) {
      dispatch(setProductCart(id, size));
    } else {
      sethasSize(true);
    }
  }

  return (
    <section className="product">
      <Container>
        <div className="product__detail">
          <div className="immage__contente">
            <Image image={image} name={name} />
          </div>

          <div className="product__content">
            <ProductName>{name}</ProductName>
            <Price
              regular={regular_price}
              atual={actual_price}
              installments={installments}
            />

            <p className="product__choose">Escolha um tamanho</p>
            {hasSize && (
              <p className="product__warning">
                É necessário escolher um tamanho
              </p>
            )}

            {sizes?.map(
              (size) =>
                size.available && (
                  <Button
                    className={isSelected(size.size)}
                    key={size.sku}
                    onClick={() => handleClickSize(size.size)}
                  >
                    {size.size}
                  </Button>
                )
            )}

            <div className="product__add">
              <Button
                className="product__cart"
                onClick={() => handleClickAddCart(id, selectedSize)}
              >
                Adicionar à sacola
              </Button>
              {/*Continuar comprando*/}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
