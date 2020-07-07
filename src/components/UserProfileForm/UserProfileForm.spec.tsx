import React from "react";
import { act } from "react-dom/test-utils";
import { Button } from "@material-ui/core";
import UserProfileForm from "./UserProfileForm";
import { mount } from "enzyme";
import users from "mocks/users";
import schema from "schemas/userSchema";

describe("UserProfileForm", () => {
  it("renders an existing user and is able to submit it again", async () => {
    const user = users[0];
    const onCompleted = jest.fn();
    const wrapper = mount(
      <UserProfileForm initialValues={user} onCompleted={onCompleted} schema={schema} />
    );
    const button = wrapper.find(Button).last();
    await act(async () => button!.props().onClick());
    expect(onCompleted).toHaveBeenCalledTimes(1);
  });

  it("renders an broekn user but its not able to submit it again", async () => {
    const user = { ...users[0], name: "" };
    const onCompleted = jest.fn();
    const wrapper = mount(
      <UserProfileForm initialValues={user} onCompleted={onCompleted} schema={schema} />
    );
    const button = wrapper.find(Button).last();
    await act(async () => button!.props().onClick());
    expect(onCompleted).toHaveBeenCalledTimes(0);
  });
});
