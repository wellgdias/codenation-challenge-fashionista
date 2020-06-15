import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import ProductDrawer from "../ProductDrawer";
import Input from "../../components/Input";

import { setProductInfo, setOpenDrawer, setValueFilter } from "../../actions";
import { createPath } from "../../utils";

import "./style.css";

export default function DrawerFilter() {
  const { filterProducts } = useSelector((state) => state);
  const [hasFilter, setHasFilter] = useState(false);
  const dispatch = useDispatch();

  function handleOnChangeFilter(value) {
    dispatch(setValueFilter(value));
    setHasFilter(true);
  }

  function handleSetProductId(id) {
    dispatch(setProductInfo(id));
    dispatch(setOpenDrawer());
    dispatch(setValueFilter(""));
  }

  return (
    <div className="filter">
      <div className="filter__form">
        <Input
          className="filter__input"
          type="text"
          placeholder="Buscar por produto..."
          onChange={(event) => handleOnChangeFilter(event.target.value)}
        />
      </div>

      <div className="filter__products">
        {filterProducts.length === 0 && hasFilter ? (
          <p className="products__empty">Não encontramos nenhum produto :(</p>
        ) : (
          filterProducts.map((product) => (
            <Link
              key={product.id}
              to={`/produto/${createPath(product.name)}`}
              onClick={() => handleSetProductId(product.id)}
            >
              <ProductDrawer
                key={product.id}
                product={product}
                drawer="filter"
              />
            </Link>
          ))
        )}
      </div>
    </div>
  );
}
