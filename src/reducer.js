import {
  LOAD_CATALOG_ERROR,
  LOAD_CATALOG_LOADING,
  LOAD_CATALOG_SUCCESS,
} from "./actionTypes";

const initialState = {
  catalog: [],
  loading: false,
  error: "",
};

export default function reduxThunkReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_CATALOG_LOADING: {
      return {
        ...state,
        loading: true,
        error: "",
      };
    }
    case LOAD_CATALOG_SUCCESS: {
      return {
        ...state,
        catalog: action.data,
        loading: false,
      };
    }
    case LOAD_CATALOG_ERROR: {
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    }
    default: {
      return state;
    }
  }
}
