import {
  FETCH_HEROES,
  ADD_HERO,
  DEL_HERO,
  GET_HERO,
  UPDATE_HERO
} from "./types";
import { heroes } from "../heroes";

export const fetchHeroes = () => {
  return {
    type: FETCH_HEROES,
    payload: heroes
  };
};

export const addHero = heroData => {
  // console.log("ADD_HERO called", heroData);
  return {
    type: ADD_HERO,
    payload: heroData
  };
};

export const updateHero = heroData => {
  // console.log("UPDATE_HERO called", heroData);
  return {
    type: UPDATE_HERO,
    payload: heroData
  };
};

export const delHero = heroId => {
  // console.log("DEL_HERO called", heroId);
  return {
    type: DEL_HERO,
    payload: heroId
  };
};

export const getHero = heroId => {
  //  let hero = heroes.find(hero => hero.id === parseInt(heroId));
  //console.log("GET_HERO", heroId);

  return {
    type: GET_HERO,
    payload: heroId
  };
};
