import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Product from "../Product";
import { loadCatalog } from "../../actions";

import "./style.css";

export default function Catalog() {
  const { catalog, loading, error } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadCatalog());
  }, [dispatch]);

  return (
    // Usar o  loading e o error
    <section className="catalog">
      <div className="container">
        <p className="catalog__count">{catalog.length} itens</p>
        <div className="catalog__list">
          {catalog?.map((product, index) => (
            <Product key={index} data={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
