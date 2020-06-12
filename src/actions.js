import {
  LOAD_CATALOG_ERROR,
  LOAD_CATALOG_LOADING,
  LOAD_CATALOG_SUCCESS,
  SET_PRODUCT_INFO,
  SET_PRODUCT_CART,
  SET_OPEN_DRAWER,
  SET_VALUE_FILTER,
} from "./actionTypes";

import api from "./services";

export const loadCatalog = () => (dispatch) => {
  dispatch({ type: LOAD_CATALOG_LOADING });

  let id = 0; //alterar com a nova API
  api.get("/catalog").then(
    (response) =>
      dispatch({
        type: LOAD_CATALOG_SUCCESS,
        data: response.data.map((data) => {
          id = id + 1;
          data.id = id;
          return data;
        }),
      }),
    (error) =>
      dispatch({
        type: LOAD_CATALOG_ERROR,
        error: error.message || "Unexpected Error!!!",
      })
  );
};

export const setProductInfo = (id) => {
  return {
    type: SET_PRODUCT_INFO,
    payload: id,
  };
};

export const setProductCart = (id, size) => {
  return {
    type: SET_PRODUCT_CART,
    size: size,
    id: id,
  };
};

export const setOpenDrawer = (receiver) => {
  return {
    type: SET_OPEN_DRAWER,
    receiver: receiver,
  };
};

export const setValueFilter = (value) => {
  return {
    type: SET_VALUE_FILTER,
    value: value,
  };
};
