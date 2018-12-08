import { NEW_NAV, FETCH_NAV, PREV_NAV } from "./types";

export const fetchNav = () => {
  //  console.log("FETCH_NAV called");
  return {
    type: FETCH_NAV,
    payload: true
  };
};

export const addNav = navLink => {
  ///  console.log("NEW_NAV called", navLink);
  return {
    type: NEW_NAV,
    payload: navLink
  };
};

export const prevNav = () => {
  //  console.log("PREV_NAV called");
  return {
    type: PREV_NAV
  };
  //  dispatch(fetchNav());
};
