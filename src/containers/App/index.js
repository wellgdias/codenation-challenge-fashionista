import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Topbar from "../Topbar";
import SlideDrawer from "../SlideDrawer";
import Backdrop from "../../components/Backdrop";

import { loadCatalog } from "../../actions";
import Routes from "../../routes/index";

import "./style.css";

export default function App() {
  const { drawer } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadCatalog());
  }, [dispatch]);

  return (
    <div data-testid="app">
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
    </div>
  );
}
