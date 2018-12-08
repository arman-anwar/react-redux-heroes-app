import React from "react";
import AddHero from "../components/addHero";
import { mount, shallow } from "enzyme";
//import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import { addHero } from "../actions/heroesAction";
import { addNav } from "../actions/navAction";
import { Provider } from "react-redux";
import heroesReducer from "../reducers/heroesReducer";
import { createStore } from "redux";
import configureStore from "../configureStore";

describe("tests for AddHero", () => {
  let store;
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
    configureStore.dispatch(addNav("/test"));
    configureStore.dispatch(addHero({ name: "test" }));
    //    instance.handleSubmit(null);
    form.find("input").instance().value = "Arman";
    form.find("button").simulate("submit");
    action = configureStore.getState();
    expect(action.heroes.items.length).toEqual(2);
  });
});
