import { FETCH_HEROES, ADD_HERO, DEL_HERO, GET_HERO } from "../actions/types";

const initialState = {
  items: [],
  item: {}
};

const heroesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_HEROES:
      return {
        ...state,
        items: action.payload
      };
    case ADD_HERO:
      return {
        ...state,
        item: action.payload
      };
    case DEL_HERO:
      return {
        ...state,
        item: action.payload
      };
    case GET_HERO:
      return {
        ...state,
        item: action.payload
      };
    default:
      return state;
  }
};

export default heroesReducer;
