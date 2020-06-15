import React from "react";

import "./style.css";

export default function Button(props) {
  return (
    <button
      className={props.className}
      onClick={props.onClick}
      data-testid="button"
    >
      {props.children}
    </button>
  );
}
