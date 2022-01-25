import { combineReducers } from "redux";

export default combineReducers({
  account: require("./account").reducer,
});
