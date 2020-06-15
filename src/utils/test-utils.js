// test-utils.js
import React from "react";
import { render as rtlRender } from "@testing-library/react";
import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { initialState as reducerInitialState, Reducer } from "../reducers";
import { BrowserRouter } from "react-router-dom";

function render(
  ui,
  {
    initialState = reducerInitialState,
    store = createStore(Reducer, initialState, compose(applyMiddleware(thunk))),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return (
      <Provider store={store}>
        <BrowserRouter>{children}</BrowserRouter>
      </Provider>
    );
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

// re-export everything
export * from "@testing-library/react";

// override render method
export { render };
