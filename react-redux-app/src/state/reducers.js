import * as types from "./actionTypes";

//define the initial slice of state
const initialValueCount = 0;

//create the reducer function
export function countReducer(count = initialValueCount, action) {
  switch (action.type) {
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

//initial slice of card
const initialValue = {
  data: [],
  error: "",
  isLoading: false
};

//create the reducer function for card
export function cardReducer(state = initialValue, action) {
  switch (action.type) {
    case types.IS_LOADING:
      return {
        ...state,
        isLoading: true
      };
    case types.GET_DATA:
      return {
        ...state,
        data: action.payload
      };
    case types.ERROR:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
}
