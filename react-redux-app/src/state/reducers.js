import * as types from "./actionTypes";

//define the initial slice of state
const initialValueCount = 0;

//create the reducer function
export function countReducer(count = initialValueCount, action) {
  switch (action.types) {
    case types.INCREMENT:
      return count + 1;
    case types.DECREMENT:
      return count - 1;
    case types.RESET:
      return 0;
    default:
      return count;
  }
}
