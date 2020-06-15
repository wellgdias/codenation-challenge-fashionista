import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import Image from "../../components/Image";
import Price from "../../components/Price";
import ProductName from "../../components/Name";
import Button from "../../components/Button";
import Container from "../../components/Container";

import { setProductCart } from "../../actions";

import "./style.css";

export default function Product() {
  const [selectedSize, setSelectedSize] = useState();
  const [hasSize, sethasSize] = useState(false);
  const { productDetail } = useSelector((state) => state);
  const dispatch = useDispatch();
  const history = useHistory();

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
    if (size.available) {
      setSelectedSize(size.size);
      sethasSize(false);
    }
  }

  function isSelected(size) {
    let className;
    if (size.available) {
      className =
        size.size === selectedSize
          ? "product__size is-selected"
          : "product__size";
    } else {
      className = "product__size is-disable";
    }

    return className;
  }

  function handleClickAddCart(id, size) {
    if (selectedSize) {
      dispatch(setProductCart(id, size));
      setSelectedSize();
    } else {
      sethasSize(true);
    }
  }

  return (
    <section className="product" data-testid="product">
      {productDetail.length === 0 ? (
        history.push("/")
      ) : (
        <Container>
          <div className="product__detail">
            <div className="image__content">
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

              {sizes?.map((size) => (
                <Button
                  className={isSelected(size)}
                  key={size.sku}
                  onClick={() => handleClickSize(size)}
                >
                  {size.size}
                </Button>
              ))}

              <div className="product__add">
                <Button
                  className="product__cart"
                  onClick={() => handleClickAddCart(id, selectedSize)}
                >
                  Adicionar à sacola
                </Button>
              </div>
            </div>
          </div>
        </Container>
      )}
    </section>
  );
}
