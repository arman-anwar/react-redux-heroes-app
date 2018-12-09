import React from "react";
import SearchHero from "../components/SearchHero";
import { mount, shallow } from "enzyme";
//import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import { addHero } from "../actions/heroesAction";
import { addNav } from "../actions/navAction";
import { Provider } from "react-redux";
import heroesReducer from "../reducers/heroesReducer";
import { createStore } from "redux";
import configureStore from "redux-mock-store";
import { Router, Route, Switch } from "react-router-dom";
import createBrowserHistory from "history/createBrowserHistory";

describe("tests for SearchHero", () => {
  const initialState = {
    heroes: {
      items: [
        { id: 14, name: "Celeritas" },
        { id: 15, name: "Magneta" },
        { id: 16, name: "RubberMan" }
      ],
      item: {}
    }
  };

  const mockStore = configureStore();
  let store, wrapper;

  beforeEach(() => {
    store = mockStore(initialState);
    wrapper = shallow(<SearchHero store={store} />);
    //    wrapper = shallow(<SearchHero heroes={initialState.heroes} />);
  });

  it("Load SearchHero box", () => {
    //    console.log("ssss", wrapper.html());
    //    expect(wrapper.contains("h3")).toBe(true);
  });

  it("Add a hero", () => {
    let action;
    const form = wrapper.find("form");
    //  expect.assertions(1);
    //    expect(action.heroes.items.length).toEqual(2);
  });
});
