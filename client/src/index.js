import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import "antd/dist/antd.css";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import promiseMiddleware from "redux-promise";
import reduxThunk from "redux-thunk";
import Reducer from "./_reducers/index";

const createStoreWithMiddleware = applyMiddleware(
  promiseMiddleware,
  reduxThunk
)(createStore);

const store = createStoreWithMiddleware(
  Reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
