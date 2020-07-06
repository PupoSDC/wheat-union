import React from "react";
import UserView from "./UserView";
import { shallow } from "enzyme";
import { USERS_API } from "consts/routes";
import axios from "axios";
import MockAxios from "axios-mock-adapter";
import users from 'mocks/users';

jest.mock("react-router-dom", () => ({
  useParams: () => ({
    userId: 1,
  }),
}));

const mock = new MockAxios(axios);

describe("UserView", () => {
  mock.onGet(`${USERS_API}/1`).reply(200, users[1]);

  it("renders without crashing", () => {
    shallow(<UserView />);
  });
});
