import React from "react";
import { useSelector } from "react-redux";

import Image from "../Image";
import Price from "../Price";
import ProductName from "../ProductName";

import "./style.css";

export default function Product() {
  const { productDetail } = useSelector((state) => state);

  const {
    image,
    name,
    regular_price,
    actual_price,
    installments,
    sizes,
  } = productDetail;

  return (
    <section className="product">
      <div className="container">
        <div className="product__detail">
          <div className="product__default">
            <Image image={image} name={name} />
          </div>

          <div className="product__">
            <ProductName name={name} />
            <Price regular={regular_price} atual={actual_price} />
            <span className="product__installments">em até {installments}</span>
            <p className="product__choose">Escolha um tamanho</p>

            {sizes?.map(
              (size) =>
                size.available && (
                  <button className="product__size" key={size.sku}>
                    {size.size}
                  </button>
                )
            )}

            <button className="product__addcart">Adicionar à sacola</button>
          </div>
        </div>
      </div>
    </section>
  );
}
