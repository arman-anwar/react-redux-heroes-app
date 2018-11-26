import {
  FETCH_HEROES,
  ADD_HERO,
  DEL_HERO,
  GET_HERO,
  UPDATE_HERO
} from "./types";
import { heroes } from "../heroes";

export const fetchHeroes = () => dispatch => {
  console.log("FETCH_HEROES called");
  //  fetch("../heroes.json")
  //  fetch("https://jsonplaceholder.typicode.com/posts")
  Promise.resolve(heroes)
    //    .then(res => console.log(res))
    .then(heroes =>
      dispatch({
        type: FETCH_HEROES,
        payload: heroes
      })
    );
};

export const addHero = heroData => dispatch => {
  console.log("ADD_HERO called");

  let b = heroes.map(a => {
    return a.id;
  });
  let maxId = 0;
  if (b.length > 0) {
    maxId = b.reduce((max, n) => (n > max ? n : max));
  }

  let hero = { id: ++maxId, name: heroData.name };
  heroes.push(hero);
  //  console.log("b", b, ...heroes);

  Promise.resolve(hero).then(res =>
    dispatch({
      type: ADD_HERO,
      payload: res
    })
  );
};

export const updateHero = heroData => dispatch => {
  console.log("UPDATE_HERO called");
  let foundIndex = heroes.findIndex(x => x.id === heroData.id);
  heroes[foundIndex] = heroData;

  // let hero = { id: ++maxId, name: heroData.name };
  // heroes.push(hero);
  //  console.log("b", b, ...heroes);

  Promise.resolve(heroData).then(res =>
    dispatch({
      type: UPDATE_HERO,
      payload: res
    })
  );
};

export const delHero = heroId => dispatch => {
  console.log("DEL_HERO called", heroId);

  heroes.splice(
    heroes.findIndex(function(el) {
      return el.id === heroId;
    }),
    1
  );
  let hero = { id: heroId, name: "" };

  //  console.log("b", b, ...heroes);

  Promise.resolve(hero).then(res =>
    dispatch({
      type: DEL_HERO,
      payload: res
    })
  );
};

export const getHero = heroId => dispatch => {
  // console.log("GET_HERO called", heroId);

  let hero = heroes.find(hero => hero.id === parseInt(heroId));

  console.log("GET_HERO", heroId, hero);

  Promise.resolve(hero).then(res =>
    dispatch({
      type: GET_HERO,
      payload: res
    })
  );
};

// export const searchHero = heroId => dispatch => {
//   // console.log("GET_HERO called", heroId);

//   let hero = heroes.find(hero => hero.id === parseInt(heroId));

//   console.log("GET_HERO", heroId, hero);

//   Promise.resolve(hero).then(res =>
//     dispatch({
//       type: GET_HERO,
//       payload: res
//     })
//   );
// };
