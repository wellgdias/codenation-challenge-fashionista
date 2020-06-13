import React from "react";
import { useDispatch } from "react-redux";
import { FiPlus, FiMinus, FiTrash2 } from "react-icons/fi";

import { setAmountProduct, deleteProductcart } from "../../actions";

import Image from "../Image";
import Button from "../Button";

import "./style.css";

export default function ProductFilter(props) {
  const product =
    props.drawer === "filter" ? props.product : props.product.info;
  const { name, image, actual_price, installments } = product;
  const dispatch = useDispatch();

  function handleOnClickAmount(id, operation) {
    dispatch(setAmountProduct(id, operation));
  }

  function handleOnClickDelete(id) {
    dispatch(deleteProductcart(id));
  }

  function isMinimumAmount(amount) {
    return amount === 1
      ? "button__icon icon--minimum"
      : "button__icon icon--minus";
  }

  return (
    <div className="drawer__product">
      <div className="drawer__image">
        <Image image={image} name={name} />
      </div>

      <div className="drawer__details">
        <span className="details__name">{name}</span>
        {props.product.info && (
          <>
            <span className="details__size">
              Tamanho: {props.product.selectedSize}
            </span>
            <div className="details__button">
              <div className="details__amount">
                <Button
                  className={isMinimumAmount(props.product.amount)}
                  onClick={() => handleOnClickAmount(props.product.id, "minus")}
                >
                  <FiMinus />
                </Button>
                <span className="amount">{props.product.amount}</span>
                <Button
                  className="button__icon icon--plus"
                  onClick={() => handleOnClickAmount(props.product.id, "plus")}
                >
                  <FiPlus />
                </Button>
              </div>
              <div className="details__delete">
                <Button
                  className="button__icon icon--delete"
                  onClick={() => handleOnClickDelete(props.product.id)}
                >
                  <FiTrash2 />
                </Button>
                <p className="delete">Remover</p>
              </div>
            </div>
          </>
        )}
      </div>

      <div className="drawer__price">
        <span className="price__atual">{actual_price}</span>
        <span className="price__installments">{installments}</span>
      </div>

      <footer className="drawer__footer">SubTotal: R$100,00</footer>
    </div>
  );
}
