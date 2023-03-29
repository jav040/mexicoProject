import { apiCall } from "../../services/api";
import { SET_CURRENT_USER } from "../actionTypes.js";

export function setCurrentUser(user) {
  return {
    type: SET_CURRENT_USER,
    user
  };
}

export function authUser(type, userData) {
  console.log("inside authUser");
  return dispatch => {
    // wrap our thunk in a promise so we can wait for the API call
    return new Promise((resolve, reject) => {
      return apiCall("post", `https://localhost:7127/api/Authentication/${type}`, userData)
        .then(({ token, ...user }) => {
            console.log("made it to successful api call");
          localStorage.setItem("jwtToken", token);
          
          dispatch(setCurrentUser(user));
          resolve(); // indicate that the API call succeeded
        })
        .catch(err => {
          reject(); // indicate the API call failed
        });
    });
  };
}
