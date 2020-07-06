import React from "react";
import UserCreateView from "./UserCreateView";
import { shallow } from "enzyme";

describe("UserCreateView", () => {
  it("renders without crashing", () => {
    shallow(<UserCreateView />);
  });
});
