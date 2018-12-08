import React from "react";
import Heroes from "../components/Heroes";
import { shallow } from "enzyme";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";

describe("Test Heroes display", () => {
  const mockStore = configureStore([thunk]);
  const storeStateMock = {
    heroes: {
      items: [
        { id: 14, name: "Celeritas" },
        { id: 15, name: "Magneta" },
        { id: 16, name: "RubberMan" }
      ],
      item: {}
    }
  };
  let store;
  let wrapper;
  beforeEach(() => {
    store = mockStore(storeStateMock);
    wrapper = shallow(<Heroes store={store} />).shallow();
  });

  it("Hero display", () => {
    //  const instance = wrapper.instance();
    //    instance.handleSubmit(null);
    //  expect(wrapper.find().prop("output")).toBe(500);

    expect(wrapper.find("li").length).toBe(3);
  });
});
