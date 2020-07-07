import React from "react";
import SearchBox from "./SearchBox";
import { shallow } from "enzyme";
import { InputBase } from "@material-ui/core";
import { Link } from "react-router-dom";

describe("SearchBox", () => {
  it("renders without crashing and passes properties to InputBase", () => {
    const searchValue = "potato";
    const newSearchValue = "newPotato";
    const searchFunction = jest.fn();
    const changeEvent = {
      target: {
        value: newSearchValue,
      },
    } as React.ChangeEvent<HTMLInputElement>;

    const wrapper = shallow(<SearchBox searchKey={searchValue} setSearchKey={searchFunction} />);
    const input = wrapper.find(InputBase);
    input!.prop("onChange")!.call(input, changeEvent);
    expect(input.props().value).toEqual(searchValue);
    expect(searchFunction).toHaveBeenCalledWith(newSearchValue);
  });
});
