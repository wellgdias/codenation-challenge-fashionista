import React, { useState } from "react";
import { useSelector } from "react-redux";

import Image from "../Image";
import Price from "../Price";
import ProductName from "../ProductName";
import Button from "../Button";
import Container from "../Container";

import "./style.css";

export default function Product() {
  const [selectedSize, setSelectedSize] = useState();
  const { productDetail } = useSelector((state) => state);

  const {
    image,
    name,
    regular_price,
    actual_price,
    installments,
    sizes,
  } = productDetail;

  function handleClickSize(size) {
    setSelectedSize(size);
  }

  function isSelected(size) {
    return size === selectedSize
      ? "product__size is-selected"
      : "product__size";
  }

  return (
    <section className="product">
      <Container>
        <div className="product__detail">
          <div className="immage__contente">
            <Image image={image} name={name} />
          </div>

          <div className="product__content">
            <ProductName name={name} />
            <Price
              regular={regular_price}
              atual={actual_price}
              installments={installments}
            />

            <p className="product__choose">Escolha um tamanho</p>
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
              <Button className="product__cart">Adicionar à sacola</Button>
              {/*Continuar comprando*/}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
