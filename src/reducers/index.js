import { combineReducers } from "redux";
import postReducer from "./postReducer";
import heroesReducer from "./heroesReducer";
import navReducer from "./navReducer";

export default combineReducers({
  posts: postReducer,
  heroes: heroesReducer,
  nav: navReducer
});
