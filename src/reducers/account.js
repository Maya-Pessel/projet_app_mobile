import { createReducer, createActions } from "reduxsauce";
import Immutable from "seamless-immutable";

/* ------------- Types and Action Creators ------------- */
const { Types, Creators } = createActions({
  signinRequest: ["email", "password"],
  signinRequestSuccess: ["token"],
  signinRequestFailure: ["error"],

  signoutRequest: ["callback"],
});

export const AccountTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */
export const INITIAL_STATE = Immutable({
  user: {},
  token: null,
  action: {
    loading: false,
    error: "",
  },
});

/* ------------- Reducers ------------- */

// SIGN IN
export const signinRequest = (state, action) => {
  let nextSate = Immutable.setIn(state, ["action", "loading"], true);
  return Immutable.setIn(nextSate, ["action", "error"], "");
};

export const signinRequestSuccess = (state, action) => {
    const newState = { ...state, token: action.token };
    let nextSate = Immutable.setIn(newState, ["action", "loading"], false);
    return Immutable.setIn(nextSate, ["action", "error"], "");
};

export const signinRequestFailure = (state, action) => {
  let nextSate = Immutable.setIn(state, ["action", "loading"], false);
  return Immutable.setIn(nextSate, ["action", "error"], action.error);
};

// SIGN OUT
export const signoutRequest = (state, action) => {
  return INITIAL_STATE;
};

/* ------------- Hookup Reducers To Types ------------- */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.SIGNIN_REQUEST]: signinRequest,
  [Types.SIGNIN_REQUEST_SUCCESS]: signinRequestSuccess,
  [Types.SIGNIN_REQUEST_FAILURE]: signinRequestFailure,

  [Types.SIGNOUT_REQUEST]: signoutRequest,
});