import React from "react";
import UserCreateView from "./UserCreateView";
import { shallow, mount } from "enzyme";

describe("UserCreateView", () => {
  it("renders without crashing", () => {
    shallow(<UserCreateView />);
  });

  it("is possible to fill the form and submit", () => {});
});
