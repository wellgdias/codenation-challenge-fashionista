import React from "react";
import { useSelector } from "react-redux";

import Product from "../ProductList";
import Container from "../Container";

import "./style.css";

export default function Catalog() {
  const { catalog } = useSelector((state) => state);
  const { products, loading, error } = catalog;

  return (
    <>
      {loading ? (
        <h1>Carregando</h1> //componente loading
      ) : (
        <section className="catalog">
          <Container>
            <p className="catalog__count">{products.length} itens</p>
            <div className="catalog__list">
              {products?.map((product) => (
                <Product key={product.id} product={product} />
              ))}
            </div>
          </Container>
        </section>
      )}
    </>
  );
}
