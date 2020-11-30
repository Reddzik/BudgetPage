import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import RootApp from "./App";
import "./i18n/i18n";

import configureStore from "data/store";
import reportWebVitals from "./reportWebVitals";

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <RootApp />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);

reportWebVitals();
