import React from "react";
import EditHero from "../components/EditHero";
import { mount, shallow } from "enzyme";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import { addHero } from "../actions/heroesAction";
import { addNav } from "../actions/navAction";
import { Provider } from "react-redux";
import heroesReducer from "../reducers/heroesReducer";
import { createStore } from "redux";
// import configureStore from "../configureStore";

describe("EditHero", () => {
  const initialState = {
    heroes: {
      items: [
        { id: 14, name: "Celeritas" },
        { id: 15, name: "Magneta" },
        { id: 16, name: "RubberMan" }
      ],
      item: {}
    },
    nav: {
      item: "test"
    }
  };
  let store;
  let wrapper;
  const mockStore = configureStore();

  beforeEach(() => {
    store = mockStore(initialState);
    const match = { params: { id: 14 } };

    wrapper = shallow(<EditHero store={store} match={match} />).shallow();
  });

  it("Load EditHero page", () => {
    // console.log("wrapper", wrapper);

    expect(wrapper.shallow().find("div").length).toBe(1);
    expect(wrapper.shallow().find("form").length).toBe(1);
    expect(wrapper.shallow().find("input").length).toBe(1);
    expect(wrapper.shallow().find("h2").length).toBe(1);
  });

  it("Get the hero", () => {
    let action = store.getActions();
    // console.log("action >>>>>", action);
    expect(action[0].type).toEqual("GET_HERO");
  });
  it("Edit the hero", () => {
    const match = { params: { id: 14 } };

    wrapper = shallow(<EditHero store={store} match={match} />);
    // console.log("form >>", wrapper.find("form"));
    const form = wrapper.shallow().find("form");
    // console.log("form >>", form);
    form.find("input").value = "Arman";

    form.find("button").simulate("click");

    let action;

    //  expect.assertions(1);
    //    instance.handleSubmit(null);
    // form.find("button").simulate("click");
    action = store.getActions();
    //    console.log("action", action);
    expect(action[0].type).toEqual("GET_HERO");
  });
});
