import { createReducer, createActions } from "reduxsauce";
import Immutable from "seamless-immutable";

/* ------------- Types and Action Creators ------------- */
const { Types, Creators } = createActions({
  resetUser: null,
  setUser: ["user"],
  setUserId: ["userId"],
  setUserAvatar: ["avatar"],
  addUserFollows: ["follows"],
  setUserFollows: ["follows"],
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
    follows: [],
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

export const setUserFollows = (state, action) => {
  return Immutable.setIn(state, ["user", "follows"], action.follows);
};


export const addUserFollows = (state, action) => {
  const follows = [...state.user.follows, ...action.follows]; 
  return Immutable.setIn(state, ["user", "follows"], follows);
};

/* ------------- Hookup Reducers To Types ------------- */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.SET_USER]: setUser,
  [Types.SET_USER_ID]: setUserId,

  [Types.SET_USER_AVATAR]: setUserAvatar,

  [Types.ADD_USER_FOLLOWS]: addUserFollows,
  [Types.SET_USER_FOLLOWS]: setUserFollows,

  [Types.RESET_USER]: resetUser,
});