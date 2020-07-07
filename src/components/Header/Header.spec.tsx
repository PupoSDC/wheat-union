import React from "react";
import Header from "./Header";
import { shallow } from "enzyme";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

describe("Header", () => {
  it("renders without crashing", () => {
    shallow(<Header mainRoute="/" />);
  });

  it("maps options correctly", () => {
    const options = [
      {
        name: "someRoute",
        to: "route",
      }
    ];

    const wrapper = shallow(<Header mainRoute="/" options={options} />);
    expect(wrapper.find(Button)).toHaveLength(2);
    expect(wrapper.find(Button).at(1).prop("to")).toEqual("route");
  })
});
