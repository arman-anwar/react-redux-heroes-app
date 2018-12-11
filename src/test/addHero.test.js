import React from "react";
import AddHero from "../components/addHero";
import { mount, shallow } from "enzyme";
//import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import { addHero } from "../actions/heroesAction";
import { addNav, prevNav, fetchNav } from "../actions/navAction";
import { Provider } from "react-redux";
import heroesReducer from "../reducers/heroesReducer";
import { createStore } from "redux";
import configureStore from "../configureStore";

describe("tests for AddHero", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(
      <Provider store={configureStore}>
        <AddHero />
      </Provider>
    );
  });

  it("Load AddHero page", () => {
    expect(wrapper.find("input").length).toBe(1);
    expect(wrapper.find("button").length).toBe(1);
  });

  it("Add a hero", () => {
    let action;
    const form = wrapper.find("form");
    //  expect.assertions(1);
    configureStore.dispatch(addHero("test"));
    //    instance.handleSubmit(null);
    form.find("input").instance().value = "Arman";
    form.find("button").simulate("submit");
    action = configureStore.getState();
    // console.log("action", action.heroes);
    expect(action.heroes.items.length).toEqual(2);
  });
  it("Test NAvigation", () => {
    let action;
    //  expect.assertions(1);
    configureStore.dispatch(fetchNav());
    configureStore.dispatch(addNav("/test"));
    configureStore.dispatch(addNav("/test1"));
    configureStore.dispatch(addNav("/test2"));
    configureStore.dispatch(prevNav());
    configureStore.dispatch(addHero("test"));
    action = configureStore.getState();
    // console.log("action", action.nav);
    expect(action.nav.items.length).toEqual(3);
  });
});
