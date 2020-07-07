import React, {Suspense} from "react";
import {MemoryRouter, Route} from "react-router-dom";
import DesktopUserView, {UserCreateViewLazy, UserEditViewLazy, UserViewLazy} from "./DesktopUserView";
import { mount } from "enzyme";
import users from "mocks/users";
import { USERS_CREATE_ROUTE, USER_VIEW_ROUTE, USER_EDIT_ROUTE } from "consts/routes";
import UserCreateView from "views/UserCreateView";
import UserEditView from "views/UserEditView";
import UserView from "views/UserView";
import UserListView from "views/UserListView";


describe("DesktopUserView", () => {

  const wrapperFactory = (route: string) => mount(
    <MemoryRouter initialEntries={[route]}>
      <DesktopUserView />
    </MemoryRouter>
    );

  it("renders base view", () => {
    const wrapper = wrapperFactory('/');
    expect(wrapper.find(UserCreateView)).toHaveLength(0);
    expect(wrapper.find(UserEditView)).toHaveLength(0);
    expect(wrapper.find(UserView)).toHaveLength(0);
    expect(wrapper.find(UserListView)).toHaveLength(1);
  });

  it("renders UserCreateView", () => {
    const wrapper = wrapperFactory(USERS_CREATE_ROUTE);
    expect(wrapper.find(Route).at(0).prop("component")).toEqual(UserCreateViewLazy);
  });

  it("renders UserView", () => {
    const wrapper = wrapperFactory(USER_VIEW_ROUTE);
    expect(wrapper.find(Route).at(0).prop("component")).toEqual(UserViewLazy);
  });

  it("renders UserEditView", () => {
    const wrapper = wrapperFactory(USER_EDIT_ROUTE);
    expect(wrapper.find(Route).at(0).prop("component")).toEqual(UserEditViewLazy);
  });
});

