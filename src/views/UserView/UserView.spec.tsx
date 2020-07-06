import React from "react";
import UserView from "./UserView";
import { shallow } from "enzyme";
import { USERS_API } from "consts/routes";
import axios from 'axios';
import MockAxios from 'axios-mock-adapter';

jest.mock('react-router-dom', () => ({
  useParams: () => ({
    userId: 1,
  }),
}));

const mock = new MockAxios(axios);

describe("UserView", () => {
  mock.onGet(`${USERS_API}/1`).reply(200, {
    "id": 3,
    "name": "Clementine Bauch",
    "username": "Samantha",
    "email": "Nathan@yesenia.net",
    "address": {
      "street": "Douglas Extension",
      "suite": "Suite 847",
      "city": "McKenziehaven",
      "zipcode": "59590-4157",
      "geo": {
        "lat": "-68.6102",
        "lng": "-47.0653"
      }
    },
    "phone": "1-463-123-4447",
    "website": "ramiro.info",
    "company": {
      "name": "Romaguera-Jacobson",
      "catchPhrase": "Face to face bifurcated interface",
      "bs": "e-enable strategic applications"
    }
  });

  it("renders without crashing", () => {
    shallow(<UserView />);
  });
});
