import React from "react";
import { connect } from "react-redux";
import * as actionCreators from "./state/actionCreators";
import "./App.css";
import Counter from "./components/Counter";

export function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

export default connect(
  state => state,
  actionCreators
)(App);
