import {
  LOAD_CATALOG_ERROR,
  LOAD_CATALOG_LOADING,
  LOAD_CATALOG_SUCCESS,
  SET_PRODUCT_INFO,
} from "./actionTypes";

const initialState = {
  catalog: {
    products: [],
    loading: false,
    error: "",
  },
  productDetail: {},
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

    default: {
      return state;
    }
  }
}
