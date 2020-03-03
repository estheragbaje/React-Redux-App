import * as types from "./actionTypes";
import axios from "axios";

export function increment() {
  return { type: types.INCREMENT };
}

export function decrement() {
  return { type: types.DECREMENT };
}

export function reset() {
  return { type: types.RESET };
}

//action creators for card
export const getData = () => dispatch => {
  dispatch({ type: types.IS_LOADING });
  axios
    .get("https://reqres.in/api/users?page=1")

    .then(res => {
      console.log("response from server", res);
      dispatch({ type: types.GET_DATA, payload: res.data.data });
    })

    .catch(err => {
      console.log(err);
      dispatch(error(err));
    });
};

export function error(err) {
  return { type: types.ERROR, payload: err };
}

export function isLoading() {
  return { type: types.IS_LOADING };
}
