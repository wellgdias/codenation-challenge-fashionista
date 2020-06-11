import {
  LOAD_CATALOG_ERROR,
  LOAD_CATALOG_LOADING,
  LOAD_CATALOG_SUCCESS,
  SET_PRODUCT_INFO,
  SET_PRODUCT_CART,
  SET_OPEN_DRAWER,
} from "./actionTypes";

const sumPrice = (x, y) => x + y;

const initialState = {
  catalog: {
    products: [],
    loading: false,
    error: "",
  },
  productDetail: {
    name: "VESTIDO TRANSPASSE BOW",
    style: "20002605",
    code_color: "20002605_613",
    color_slug: "tapecaria",
    color: "TAPEÇARIA",
    on_sale: false,
    regular_price: "R$ 199,90",
    actual_price: "R$ 199,90",
    discount_percentage: "",
    installments: "3x R$ 66,63",
    image:
      "https://viniciusvinna.netlify.app/assets/api-fashionista/20002605_615_catalog_1.jpg",
    sizes: [
      {
        available: false,
        size: "PP",
        sku: "5807_343_0_PP",
      },
      {
        available: true,
        size: "P",
        sku: "5807_343_0_P",
      },
      {
        available: true,
        size: "M",
        sku: "5807_343_0_M",
      },
      {
        available: true,
        size: "G",
        sku: "5807_343_0_G",
      },
      {
        available: false,
        size: "GG",
        sku: "5807_343_0_GG",
      },
    ],
  },
  cart: {
    products: [],
    amount: 0,
  },
  drawer: {
    receiver: "",
    open: false,
  },
};

export default function Reducer(state = initialState, action) {
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
        }
        return product;
      });

      const isProduct = state.cart.products.filter((product) => {
        return (
          product.info.id === action.id && product.selectedSize === action.size
        );
      });

      if (isProduct.length === 0) {
        const product = {
          info: state.productDetail,
          selectedSize: action.size,
          amount: 1,
        };
        productsCart.push(product);
      }

      const amountCart = productsCart
        .map((product) => product.amount)
        .reduce(sumPrice, 0);

      return {
        ...state,
        cart: {
          products: productsCart,
          amount: amountCart,
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

    default: {
      return state;
    }
  }
}
