import React, { FunctionComponent, Suspense, lazy } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { CssBaseline, ThemeProvider, useTheme, useMediaQuery } from "@material-ui/core";
import {
  ROOT_ROUTE,
  USERS_ROUTE,
  USERS_CREATE_ROUTE,
  USER_VIEW_ROUTE,
  USER_EDIT_ROUTE,
} from "consts/routes";
import Header from "components/Header";
import LoadingSpinner from "components/LoadingSpinner";
import theme from "utils/theme";
import LandingPageView from "views/LandingPageView";

const UserCreateView = lazy(() => import("views/UserCreateView"));
const UserEditView = lazy(() => import("views/UserEditView"));
const UserView = lazy(() => import("views/UserView"));
const UserListView = lazy(() => import("views/UserListView"));

const Routes: FunctionComponent<{}> = () => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("sm"));

  const options = [
    {
      to: USERS_ROUTE,
      name: "users",
    }
  ];

  return (
    <Suspense fallback={<LoadingSpinner />}>
      <BrowserRouter>
        <Header mainRoute={ROOT_ROUTE} options={options} />
        <Switch>
          <Route component={UserCreateView} path={USERS_CREATE_ROUTE} />
          <Route component={UserEditView} path={USER_EDIT_ROUTE} />
          <Route component={UserView} path={USER_VIEW_ROUTE} />
          <Route component={UserListView} path={USERS_ROUTE} />
          <Route component={LandingPageView} path={ROOT_ROUTE} />
        </Switch>
      </BrowserRouter>
    </Suspense>
  );
};

const App: FunctionComponent<{}> = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Routes />
  </ThemeProvider>
);

export default App;
