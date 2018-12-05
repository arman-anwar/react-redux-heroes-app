import React from "react";
import ReactDOM from "react-dom";
import App from "../App";
import { shallow } from "enzyme";

it("App renders without crashing", () => {
  const wrapper = shallow(<App />);
  const div = wrapper.find("div").length;
  expect(wrapper.find("div").length).toBeGreaterThan(0);
});
