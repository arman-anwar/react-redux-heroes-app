import { combineReducers } from "redux";
import heroesReducer from "./heroesReducer";
import navReducer from "./navReducer";

export default combineReducers({
  heroes: heroesReducer,
  nav: navReducer
});
