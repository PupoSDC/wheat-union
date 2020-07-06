import React from "react";
import UserItem from "./UserItem";
import { shallow } from "enzyme";
import users from "mocks/users";

describe("UserItem", () => {
  it("renders without crashing", () => {
    shallow(<UserItem {...users[0]} />);
  });
});
