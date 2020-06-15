import { createStore, compose, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import { Reducer } from "../reducers";

const persistConfig = {
  key: "cart",
  storage,
  whitelist: ["cart"],
};

const persistedReducer = persistReducer(persistConfig, Reducer);

const store = createStore(
  persistedReducer,
  compose(
    applyMiddleware(thunk),
    ...(window.__REDUX_DEVTOOLS_EXTENSION__
      ? [window.__REDUX_DEVTOOLS_EXTENSION__()]
      : [])
  )
);

const persistor = persistStore(store);

export { store, persistor };
