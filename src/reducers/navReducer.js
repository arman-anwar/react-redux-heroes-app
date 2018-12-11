import { NEW_NAV, FETCH_NAV, PREV_NAV } from "../actions/types";

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

    case PREV_NAV:
      let a = state.items;
      let temp = a[a.length - 2];
      // console.log("PREV_NAV >> ", a, temp);
      return {
        items: [...state.items],
        item: temp
      };

    default:
      return state;
  }
}
