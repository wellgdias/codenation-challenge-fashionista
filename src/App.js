import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { useDispatch } from "react-redux";

import { loadCatalog } from "./actions";

import Topbar from "./components/Topbar";
import Routes from "./routes";

import "./global.css";

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadCatalog());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Topbar />
      <Routes />
    </BrowserRouter>
  );
}
