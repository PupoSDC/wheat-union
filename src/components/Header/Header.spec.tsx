import React from "react";
import Header from "./Header";
import { InputBase } from "@material-ui/core";
import { shallow } from "enzyme";

describe("Header", () => {
  it("renders with appropriate bindings for searching", () => {
    const searchKey = "searchKey";
    const mockValue = "mockValue";
    const setSearchKey = jest.fn();

    const wrapper = shallow(<Header searchKey={searchKey} setSearchKey={setSearchKey} />);
    const input = wrapper.find(InputBase);
    const changeEvent = {
      target: {
        value: mockValue
      }
    } as React.ChangeEvent<HTMLInputElement>;

    expect(input).toBeDefined();
    expect(input.prop("value")).toEqual(searchKey);

    input!.prop("onChange")!.call(input, changeEvent);
    expect(setSearchKey).toHaveBeenCalledWith(mockValue);
  });
});
