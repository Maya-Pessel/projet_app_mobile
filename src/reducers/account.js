import { createReducer, createActions } from "reduxsauce";
import Immutable from "seamless-immutable";

/* ------------- Types and Action Creators ------------- */
const { Types, Creators } = createActions({
  resetUser: null,
  setUser: ["user"],
  setUserId: ["userId"],
  setUserAvatar: ["avatar"],
});

export const AccountTypes = Types;
export default Creators;

export const GAMES_ENUM = {
  LOL: "lol",
  OVERWATCH: "overwatch",
  COD: "cod",
  CSGO: "csgo",
}

/* ------------- Initial State ------------- */
export const INITIAL_STATE = Immutable({
  user: {
    email: "",
    name: "",
    birthday: "",
    game: "",
    description: "",
    avatar: "",
  },
  userId: null,
});

/* ------------- Reducers ------------- */


export const resetUser = (state, action) => {
  return INITIAL_STATE;
};

export const setUser = (state, action) => {
  let nextSate = { ...state.user, ...action.user };
  return Immutable.setIn(state, ["user"], nextSate);
};
export const setUserId = (state, action) => {
  return Immutable.setIn(state, ["userId"], action.userId);
};

export const setUserAvatar = (state, action) => {
  return Immutable.setIn(state, ["user", "avatar"], action.avatar);
};


/* ------------- Hookup Reducers To Types ------------- */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.SET_USER]: setUser,
  [Types.SET_USER_ID]: setUserId,

  [Types.SET_USER_AVATAR]: setUserAvatar,

  [Types.RESET_USER]: resetUser,
});