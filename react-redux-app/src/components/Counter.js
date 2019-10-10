import React from "react";
import { connect } from "react-redux";
import * as actionCreators from "../state/actionCreators";

export function Counter(props) {
  const { count, decrement, increment, reset } = props;
  console.log(increment);
  return (
    <div>
      <h1>The count is {count}</h1>
      <button onClick={increment}>increment +</button>
      <button onClick={decrement}>decrement -</button>
      <button onClick={reset}>reset</button>
    </div>
  );
}

export default connect(
  state => state,
  actionCreators
)(Counter);
