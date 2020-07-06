import React from "react";
import UserListView from "./UserListView";
import { shallow } from "enzyme";

describe("UserListView", () => {
  it("renders without crashing", () => {
    shallow(<UserListView />);
  });
});
