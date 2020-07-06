import React from "react";
import UserProfile from "./UserProfile";
import { shallow } from "enzyme";
import users from 'mocks/users';

describe("UserProfile", () => {
  it("renders without crashing", () => {
    shallow(<UserProfile {...users[0]} />);
  });
});
