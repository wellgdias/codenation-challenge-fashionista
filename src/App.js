import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { loadCatalog } from "./actions";

import Topbar from "./components/Topbar";
import SlideDrawer from "./components/SlideDrawer";
import Backdrop from "./components/Backdrop";

import Routes from "./routes";

import "./global.css";

export default function App() {
  const { drawer } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadCatalog());
  }, [dispatch]);

  return (
    <BrowserRouter>
      {drawer.open && (
        <>
          <SlideDrawer />
          <Backdrop />
        </>
      )}
      <Topbar />
      <Routes />
    </BrowserRouter>
  );
}
