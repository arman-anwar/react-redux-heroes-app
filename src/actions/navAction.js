import { NEW_NAV, FETCH_NAV } from "./types";

export const fetchNav = () => dispatch => {
  console.log("fetchNav called");
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
