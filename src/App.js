import React from "react";
import { BrowserRouter } from "react-router-dom";

import Topbar from "./components/Topbar";
import Routes from "./routes";

import "./global.css";

export default function App() {
  return (
    <BrowserRouter>
      <Topbar />
      <Routes />
    </BrowserRouter>
  );
}
