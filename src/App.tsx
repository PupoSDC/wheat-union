import React, { FunctionComponent, Suspense, lazy } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { CssBaseline, ThemeProvider, useTheme, useMediaQuery } from "@material-ui/core";
import {
  ROOT_ROUTE,
  USERS_ROUTE,
  USERS_CREATE_ROUTE,
  USER_VIEW_ROUTE,
} from "consts/routes";
import Header from "components/Header";
import theme from "utils/theme";


const UserCreateView = lazy(() => import("views/UserCreateView"));
const UserView = lazy(() => import("views/UserView"));
const UserListView = lazy(() => import("views/UserListView"));


const Routes: FunctionComponent<{}> = () => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BrowserRouter>
        <Switch>
          <Route component={UserCreateView} path={USERS_CREATE_ROUTE} />
          <Route component={UserView} path={USER_VIEW_ROUTE} />
          <Route component={UserListView} path={USERS_ROUTE} />
          <Route component={() => <h1>Hello World</h1>} path={ROOT_ROUTE} />
        </Switch>
      </BrowserRouter>
    </Suspense>
  );
};

const App: FunctionComponent<{}> = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Header />
    <Routes />
  </ThemeProvider>
);


export default App;
