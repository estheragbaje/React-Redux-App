import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as actionCreators from "./state/actionCreators";
import "./App.css";
import Counter from "./components/Counter";
import Card from "./components/Card";

export function App() {
  useEffect(() => {
    actionCreators.getData();
  }, []);

  return (
    <div className="App">
      <Counter />
      <Card />
    </div>
  );
}

export default connect(
  state => state,
  actionCreators.getData
)(App);
