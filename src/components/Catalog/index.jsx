import React, { useState, useEffect } from "react";

import Product from "../Product";

import api from "../../services";

import "./style.css";

export default function Catalog() {
  const [catalog, setCatalog] = useState([]);

  useEffect(() => {
    api.get("/catalog").then((response) => {
      setCatalog(response.data);
    });
  }, []);

  return (
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
