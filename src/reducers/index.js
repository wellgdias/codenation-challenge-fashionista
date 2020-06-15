import {
  LOAD_CATALOG_ERROR,
  LOAD_CATALOG_LOADING,
  LOAD_CATALOG_SUCCESS,
  SET_PRODUCT_INFO,
  SET_PRODUCT_CART,
  SET_OPEN_DRAWER,
  SET_VALUE_FILTER,
  SET_AMOUNT_PRODUCT,
  DELETE_PRODUCT_CART,
} from "../constants";

import { sumCartField } from "../utils";

export const initialState = {
  catalog: {
    products: [],
    loading: false,
    error: "",
  },
  productDetail: [],
  cart: {
    products: [],
    amount: 0,
    total: 0,
  },
  filterProducts: [],
  drawer: {
    receiver: "",
    open: false,
  },
};

export function Reducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_CATALOG_LOADING: {
      return {
        ...state,
        catalog: {
          loading: true,
          error: "",
        },
      };
    }
    case LOAD_CATALOG_SUCCESS: {
      return {
        ...state,
        catalog: {
          products: action.data,
          loading: false,
        },
      };
    }
    case LOAD_CATALOG_ERROR: {
      return {
        ...state,
        catalog: {
          loading: false,
          error: action.error,
        },
      };
    }
    case SET_PRODUCT_INFO: {
      const product = state.catalog.products.filter(
        (product) => product.id === action.payload
      );
      return {
        ...state,
        productDetail: product[0],
      };
    }

    case SET_PRODUCT_CART: {
      const productsCart = state.cart.products.map((product) => {
        if (
          product.info.id === action.id &&
          product.selectedSize === action.size
        ) {
          product.amount += 1;
          product.total =
            parseFloat(product.info.actual_price.replace("R$ ", "")) *
            product.amount;
        }
        return product;
      });

      const hasProduct = state.cart.products.filter((product) => {
        return (
          product.info.id === action.id && product.selectedSize === action.size
        );
      });

      if (hasProduct.length === 0) {
        const product = {
          id: action.id + action.size,
          info: state.productDetail,
          selectedSize: action.size,
          total: parseFloat(
            state.productDetail.actual_price.replace("R$ ", "")
          ),
          amount: 1,
        };
        productsCart.push(product);
      }

      const amountCart = sumCartField(productsCart, "amount");
      const totalCart = sumCartField(productsCart, "total");

      return {
        ...state,
        cart: {
          products: productsCart,
          amount: amountCart,
          total: totalCart,
        },
      };
    }

    case SET_OPEN_DRAWER: {
      return {
        ...state,
        drawer: {
          receiver: action.receiver,
          open: !state.drawer.open,
        },
      };
    }

    case SET_VALUE_FILTER: {
      let filteredProducts;
      if (action.value !== "") {
        filteredProducts = state.catalog.products.filter((product) =>
          product.name.toLowerCase().includes(action.value.toLowerCase())
        );
      } else {
        filteredProducts = [];
      }

      return {
        ...state,
        filterProducts: filteredProducts,
      };
    }

    case SET_AMOUNT_PRODUCT: {
      const productsCart = state.cart.products.map((product) => {
        if (product.id === action.id) {
          action.operation === "plus"
            ? (product.amount += 1)
            : (product.amount -= 1);

          product.total =
            parseFloat(product.info.actual_price.replace("R$ ", "")) *
            product.amount;
        }
        return product;
      });

      const amountCart = sumCartField(productsCart, "amount");
      const totalCart = sumCartField(productsCart, "total");

      return {
        ...state,
        cart: {
          products: productsCart,
          amount: amountCart,
          total: totalCart,
        },
      };
    }

    case DELETE_PRODUCT_CART: {
      const productsCart = state.cart.products.filter(
        (product) => product.id !== action.id
      );

      const amountCart = sumCartField(productsCart, "amount");
      const totalCart = sumCartField(productsCart, "total");

      return {
        ...state,
        cart: {
          products: productsCart,
          amount: amountCart,
          total: totalCart,
        },
      };
    }

    default: {
      return state;
    }
  }
}
