import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import Catalog from "../../components/Catalog";

import { setLocal } from "../../actions";

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setLocal("Home"));
  }, [dispatch]);

  return (
    <Catalog />
    //Rodape
  );
}
