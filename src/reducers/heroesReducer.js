import {
  FETCH_HEROES,
  ADD_HERO,
  DEL_HERO,
  GET_HERO,
  UPDATE_HERO
} from "../actions/types";

const initialState = {
  items: [],
  item: { id: 0, name: "" }
};

const heroesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_HEROES:
      //let test = [];
      if (state.items.length > 0) {
        return {
          ...state
        };
      }
      return {
        ...state,
        items: action.payload
      };
    case ADD_HERO:
      let b = state.items.map(a => {
        return a.id;
      });
      let maxId = 0;
      if (b.length > 0) {
        maxId = b.reduce((max, n) => (n > max ? n : max));
      }
      let hero = { id: ++maxId, name: action.payload };

      return {
        ...state,
        items: [...state.items, hero]
      };
    case DEL_HERO:
      state.items.splice(
        state.items.findIndex(function(el) {
          return el.id === action.payload;
        }),
        1
      );

      return {
        ...state,
        items: [...state.items]
      };
    case GET_HERO:
      let item = state.items.find(hero => hero.id === parseInt(action.payload));
      // console.log("GET_HERO", action.payload, state.items, item);

      return {
        ...state,
        item: item !== undefined ? item : { id: 0, name: "" }
      };
    case UPDATE_HERO:
      let foundIndex = state.items.findIndex(x => x.id === action.payload.id);
      state.items[foundIndex] = action.payload;
      // console.log("GET_HERO", action.payload, state.items, item);

      return {
        items: [...state.items],
        item: action.payload
      };
    default:
      return state;
  }
};

export default heroesReducer;
