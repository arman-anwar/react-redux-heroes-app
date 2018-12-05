import React from "react";
import AddHero from "../components/addHero";
import { shallow } from "enzyme";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

const mockStore = configureMockStore([thunk]);
const storeStateMock = {
  myReducer: {
    someState: "ABC"
  }
};
let store;
let wrapper;
describe("tests for AddHero", () => {
  beforeEach(() => {
    store = mockStore(storeStateMock);
    wrapper = shallow(<AddHero store={store} />).shallow();
  });

  it("Load AddHero page", () => {
    const div = wrapper.find("form").length;
    console.log(wrapper.debug());
    expect(wrapper.find("input").length).toBe(1);
  });
});
