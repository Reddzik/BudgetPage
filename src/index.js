import React from "react";
import ReactDOM from "react-dom";
import RootApp from "./App";
import "./i18n/i18n";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <RootApp />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
