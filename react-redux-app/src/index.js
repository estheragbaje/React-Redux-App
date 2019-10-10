import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";

import "./index.css";
import App from "./App";

import * as reducers from "./state/reducers";

//giant reducer being combined
const monsterReducer = combineReducers({
  count: reducers.countReducer
});

//the store that stores everything
const store = createStore(
  monsterReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
