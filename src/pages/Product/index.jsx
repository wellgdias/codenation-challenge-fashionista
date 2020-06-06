import React from "react";
import { useParams } from "react-router-dom";

export default function Product() {
  let { id } = useParams();
  return (
    <>
      <h1>Informações dos produtos: {id}</h1>
    </>
  );
}
