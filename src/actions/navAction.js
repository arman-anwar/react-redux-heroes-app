import { NEW_NAV, FETCH_NAV, PREV_NAV } from "./types";

export const fetchNav = () => dispatch => {
  console.log("FETCH_NAV called");
  dispatch({
    type: FETCH_NAV,
    payload: true
  });
};

export const addNav = navLink => dispatch => {
  console.log("NEW_NAV called", navLink);
  dispatch({
    type: NEW_NAV,
    payload: navLink
  });
  dispatch(fetchNav());
};

export const prevNav = () => dispatch => {
  console.log("PREV_NAV called");
  dispatch({
    type: PREV_NAV
  });
  dispatch(fetchNav());
};
