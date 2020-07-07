import React from "react";
import LoadingSpinner from "./LoadingSpinner";
import { shallow } from "enzyme";

describe("LoadingSpinner", () => {
  it("renders without crashing", () => {
    shallow(<LoadingSpinner />);
  });
});
