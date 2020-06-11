import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import ProductDetail from "../../components/ProductDetail";

import { setLocal } from "../../actions";

export default function Product() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setLocal("Product"));
  }, [dispatch]);

  return <ProductDetail />;
}
