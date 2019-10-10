import React from "react";
import { connect } from "react-redux";

export function CardUser(props) {
  console.log("props from carduser", props);
  const { item } = props;

  return (
    <div>
      <img src={item.avatar} />
      <h2>
        My Full name is {item.first_name}
        {item.last_name}
      </h2>
      <h3>My email is {item.email}</h3>
    </div>
  );
}

export default connect(state => state)(CardUser);
