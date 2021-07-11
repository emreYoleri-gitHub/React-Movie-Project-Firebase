import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "alertifyjs/build/css/alertify.css";
import { applyMiddleware, createStore } from "redux";
import reducers from "./redux/reducers";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
