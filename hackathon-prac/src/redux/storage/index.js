import { combineReducers } from "redux";
import { profileReducer } from "./profile/profile";

/* root reducer ------------------------------------------------------------- */

const rootReducer = combineReducers({
  profile: profileReducer,
});

export default rootReducer;
