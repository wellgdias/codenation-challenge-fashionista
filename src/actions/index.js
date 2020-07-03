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
} from '../constants';

import api from '../services';

export const loadCatalog = () => (dispatch) => {
  dispatch({ type: LOAD_CATALOG_LOADING });

  let id = 0;
  api.get('/5eff7f2bbb5fbb1d25638066').then(
    (response) =>
      dispatch({
        type: LOAD_CATALOG_SUCCESS,
        data: response.data
          .map((data) => {
            id = id + 1;
            data.id = id;
            return data;
          })
          .filter((product) => product.name && product.style),
      }),
    (error) =>
      dispatch({
        type: LOAD_CATALOG_ERROR,
        error: error.message || 'Unexpected Error!!!',
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

export const setAmountProduct = (id, operation) => {
  return {
    type: SET_AMOUNT_PRODUCT,
    id: id,
    operation: operation,
  };
};

export const deleteProductcart = (id) => {
  return {
    type: DELETE_PRODUCT_CART,
    id: id,
  };
};
