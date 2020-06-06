import {
  LOAD_CATALOG_ERROR,
  LOAD_CATALOG_LOADING,
  LOAD_CATALOG_SUCCESS,
} from "./actionTypes";

import api from "./services";

export const loadCatalog = () => (dispatch) => {
  dispatch({ type: LOAD_CATALOG_LOADING });

  api.get("/catalog").then(
    (response) => dispatch({ type: LOAD_CATALOG_SUCCESS, data: response.data }),
    (error) =>
      dispatch({
        type: LOAD_CATALOG_ERROR,
        error: error.message || "Unexpected Error!!!",
      })
  );
};
