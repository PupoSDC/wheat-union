import React from "react";
import Logo from "./Logo";
import { shallow } from "enzyme";

describe("Logo", () => {
  it("renders without crashing", () => {
    shallow(<Logo />);
  });
});
