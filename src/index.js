import React from "react";
// import ReactDOM from "react-dom";
import "./index.css";
import { AppRouter } from "./pages/AppRouter";
import { injectGlobalCss } from "./utils/globalCss";
import { hydrate, render } from "react-dom";

injectGlobalCss();
// ReactDOM.render(<AppRouter />, document.getElementById("root"));

const rootElement = document.getElementById("root");

if (rootElement.hasChildNodes()) {
  hydrate(<AppRouter />, rootElement);
} else {
  render(<AppRouter />, rootElement);
}
