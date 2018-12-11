import React from "react";
import HeaderNavContainer from "../components/HeaderNavContainer";
import { shallow } from "enzyme";

describe("HeaderNavContainer", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<HeaderNavContainer />).shallow();
  });

  it("Load HeaderNavContainer", () => {
    // console.log("wrapper", wrapper);

    expect(wrapper.shallow().find("NavLink").length).toBe(2);
    //    expect(wrapper.shallow().find("SearchHero").length).toBe(1);
  });
});
