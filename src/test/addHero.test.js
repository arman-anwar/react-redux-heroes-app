import React from "react";
import AddHero from "../components/addHero";
import { mount, shallow } from "enzyme";
import { addHero, getHero, delHero, updateHero } from "../actions/heroesAction";
import { addNav, prevNav, fetchNav } from "../actions/navAction";
import { Provider } from "react-redux";
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

  it("Get a hero", () => {
    let action;
    configureStore.dispatch(addHero("test"));
    configureStore.dispatch(getHero(2));
    //    instance.handleSubmit(null);
    action = configureStore.getState();
    // console.log("action", action.heroes);
    expect(action.heroes.item.id).toEqual(2);
  });
  it("Update a hero", () => {
    let action = configureStore.getState();
    // configureStore.dispatch(addHero("test"));
    // console.log("action", action.heroes.items);
    configureStore.dispatch(updateHero({ id: 3, name: "newName" }));
    //    instance.handleSubmit(null);
    action = configureStore.getState();
    let temp = action.heroes.items.find(hero => hero.id === 3);
    // console.log("action", action.heroes);
    expect(temp.name).toEqual("newName");
  });

  it("Delete a hero", () => {
    let action;
    configureStore.dispatch(addHero("testk"));
    action = configureStore.getState();
    let prevTotal = action.heroes.items.length;
    configureStore.dispatch(delHero(2));
    let newTotal = action.heroes.items.length;
    //    instance.handleSubmit(null);
    // console.log("action", action.heroes, prevTotal, newTotal);
    expect(prevTotal - 1).toEqual(newTotal);
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
