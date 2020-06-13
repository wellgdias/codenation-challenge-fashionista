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
} from "./actionTypes";

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
    total: 0,
  },
  filterProducts: [],
  drawer: {
    receiver: "",
    open: false,
  },
};

const sumPrice = (x, y) => x + y;

const sumAmountCart = (products) => {
  return products.map((product) => product.amount).reduce(sumPrice, 0);
};

const sumTotalCart = (products) => {
  return products.map((product) => product.total).reduce(sumPrice, 0);
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

      const amountCart = sumAmountCart(productsCart);
      const totalCart = sumTotalCart(productsCart);

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

      const amountCart = sumAmountCart(productsCart);
      const totalCart = sumTotalCart(productsCart);

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

      const amountCart = sumAmountCart(productsCart);
      const totalCart = sumTotalCart(productsCart);

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
