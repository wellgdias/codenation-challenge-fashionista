import React from "react";

import "./style.css";

export default function Input(props) {
  return (
    <input
      className={props.className}
      type="text"
      placeholder={props.placeholder}
      onChange={props.onChange}
      data-testid="input"
    />
  );
}
