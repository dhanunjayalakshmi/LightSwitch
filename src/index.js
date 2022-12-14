import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Room from "./Room";

import { Provider } from "react-redux";
import { store } from "./store/store";

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <Room />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
