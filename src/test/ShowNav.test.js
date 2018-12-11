import React from "react";
import ShowNav from "../components/ShowNav";
import { mount, shallow } from "enzyme";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import { addHero } from "../actions/heroesAction";
import { addNav } from "../actions/navAction";
import { Provider } from "react-redux";
import heroesReducer from "../reducers/heroesReducer";
import { createStore } from "redux";
// import configureStore from "../configureStore";

describe("ShowNav", () => {
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
      items: ["/Celeritas", "/Celeritas"],
      item: "test"
    }
  };
  let store;
  let wrapper;
  const mockStore = configureStore();

  beforeEach(() => {
    store = mockStore(initialState);
    //    const match = { params: { id: 14 } };

    wrapper = shallow(<ShowNav store={store} />).shallow();
  });

  it("Load ShowNav page", () => {
    // console.log("wrapper", wrapper);

    expect(wrapper.find(".container").length).toBe(1);
    expect(wrapper.find("h3").length).toBe(1);
  });
});
