import React from "react";
import { connect } from "react-redux";
import CardUser from "./CardUser";

import * as actionCreators from "../state/actionCreators";

export function Card(props) {
  console.log(props);
  const { state } = props;
  return (
    <div>
      {state.data.map(item => (
        <CardUser item={item} key={item.id} />
      ))}
    </div>
  );
}

// {
//   todos.map(todo => (
//     <Todo
//       key={todo.id}
//       isCompleted={todo.isCompleted}
//       todo={todo}
//       onToggleComplete={onToggleComplete}
//       title={todo.title}
//     />
//   ));
// }

export default connect(
  state => state,
  actionCreators
)(Card);
