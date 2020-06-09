import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Product from "../ProductList";
import { loadCatalog } from "../../actions";

import "./style.css";

export default function Catalog() {
  const { catalog } = useSelector((state) => state);
  const { products, loading, error } = catalog;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadCatalog());
  }, [dispatch]);

  return (
    <>
      {loading ? (
        <h1>Carregando</h1> //componente loading
      ) : (
        <section className="catalog">
          <div className="container">
            <p className="catalog__count">{products.length} itens</p>
            <div className="catalog__list">
              {products?.map((product) => (
                <Product key={product.id} data={product} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
