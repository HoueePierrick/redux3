import React from "react";
import ReactDOM from "react-dom";

// Component to activate redux in react
import { Provider } from "react-redux";

import App from "./app/App.js";

// Importing store (containing state)
import { store } from "./app/store.js";

const render = () => {
  ReactDOM.render(
    // Importing store to provider, and wrapping it over App
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById("root")
  );
};
store.subscribe(render);
render();
