import React from "react";
import { FiSearch, FiShoppingBag } from "react-icons/fi";

import "./style.css";

export default function Home() {
  return (
    <>
      <header className="topbar">
        <div className="container">
          <div className="topbar__default">
            <div className="topbar__logo">
              <h1 className="logo__name">Fashionista</h1>
            </div>

            <div className="topbar__menu">
              <button className="menu__icon--search">
                <FiSearch />
              </button>
              <button className="menu__icon--cart">
                <FiShoppingBag />
              </button>
            </div>
          </div>
        </div>
      </header>

      <section className="products">
        <div className="container">
          <p className="products__count">22 itens</p>
          <div className="products__list">
            <div className="product__info">
              <figure className="product__image">
                <span className="product__discount">-25%</span>
                <img
                  src="https://d3l7rqep7l31az.cloudfront.net/images/products/20002605_615_catalog_1.jpg?1460136912"
                  alt="Produto VESTIDO TRANSPASSE BOW"
                  title="VESTIDO TRANSPASSE BOW"
                />
              </figure>
              {/* Verificar tamanho do texto para não aumentar o card */}
              <h3 className="product__name">VESTIDO</h3>
              <div className="product__pricing">
                <span className="product__price product__price--from">
                  R$ 199,99
                </span>
                <span className="product__price product__price--to">
                  R$ 169,99
                </span>
              </div>
            </div>

            <div className="product__info">
              <figure className="product__image">
                <img
                  src="https://d3l7rqep7l31az.cloudfront.net/images/products/20002605_615_catalog_1.jpg?1460136912"
                  alt="Produto VESTIDO TRANSPASSE BOW"
                  title="VESTIDO TRANSPASSE BOW"
                />
              </figure>
              <h3 className="product__name">VESTIDO</h3>
              <div className="product__pricing">
                <span className="product__price">R$ 199,99</span>
              </div>
            </div>

            <div className="product__info">
              <figure className="product__image">
                <img
                  src="https://d3l7rqep7l31az.cloudfront.net/images/products/20002605_615_catalog_1.jpg?1460136912"
                  alt="Produto VESTIDO TRANSPASSE BOW"
                  title="VESTIDO TRANSPASSE BOW"
                />
              </figure>
              <h3 className="product__name">VESTIDO</h3>
              <div className="product__pricing">
                <span className="product__price">R$ 199,99</span>
              </div>
            </div>

            <div className="product__info">
              <figure className="product__image">
                <span className="product__discount">-12%</span>
                <img
                  src="https://d3l7rqep7l31az.cloudfront.net/images/products/20002605_615_catalog_1.jpg?1460136912"
                  alt="Produto VESTIDO TRANSPASSE BOW"
                  title="VESTIDO TRANSPASSE BOW"
                />
              </figure>
              <h3 className="product__name">VESTIDO</h3>
              <div className="product__pricing">
                <span className="product__price">R$ 199,99</span>
              </div>
            </div>

            <div className="product__info">
              <figure className="product__image">
                <img
                  src="https://d3l7rqep7l31az.cloudfront.net/images/products/20002605_615_catalog_1.jpg?1460136912"
                  alt="Produto VESTIDO TRANSPASSE BOW"
                  title="VESTIDO TRANSPASSE BOW"
                />
              </figure>
              <h3 className="product__name">VESTIDO</h3>
              <div className="product__pricing">
                <span className="product__price product__price--from">
                  R$ 199,99
                </span>
                <span className="product__price product__price--to">
                  R$ 199,99
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
