import { NEW_NAV, FETCH_NAV } from "../actions/types";

const initialState = {
  items: [],
  item: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case NEW_NAV:
      return {
        items: [...state.items, action.payload],
        item: action.payload
      };

    case FETCH_NAV:
      return {
        ...state
      };

    default:
      return state;
  }
}
