import React, { FunctionComponent, lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import LoadingSpinner from "components/LoadingSpinner";
import Logo from "components/Logo";
import UserListView from "views/UserListView";
import { USERS_CREATE_ROUTE, USER_VIEW_ROUTE, USER_EDIT_ROUTE } from "consts/routes";

const useStyles = makeStyles((theme) => ({
  container: {
    margin: "auto",
    height: "calc(100% - 64px)",
    flex: 1,
  },
  sideBar: {
    display: "flex",
    "overflow-y": "auto",
    height: "100%",
    backgroundColor: theme.palette.background.default,
    position: "relative",
  },
  mainSide: {
    display: "flex",
    padding: theme.spacing(2),
    margin: "auto",
    width: "100%",
    height: "100%",
    "overflow-y": "auto",
  },
  icon: {
    color: "rgba(0, 0, 0, 0.1)",
    margin: "auto",
    fontSize: 75,
  },
}));

export const UserCreateViewLazy = lazy(() => import("views/UserCreateView"));
export const UserEditViewLazy = lazy(() => import("views/UserEditView"));
export const UserViewLazy = lazy(() => import("views/UserView"));

const DesktopUserView: FunctionComponent<{}> = () => {
  const classes = useStyles();
  return (
    <Grid className={classes.container} container>
      <Grid className={classes.sideBar} item xl={2} xs={3}>
        <UserListView />
      </Grid>
      <Grid className={classes.mainSide} item xl={10} xs={9}>
        <Suspense fallback={<LoadingSpinner />}>
          <Switch>
            <Route component={UserCreateViewLazy} path={USERS_CREATE_ROUTE} />
            <Route component={UserEditViewLazy} path={USER_EDIT_ROUTE} />
            <Route component={UserViewLazy} path={USER_VIEW_ROUTE} />
            <Route component={() => <Logo className={classes.icon} />} />
          </Switch>
        </Suspense>
      </Grid>
    </Grid>
  );
};

export default DesktopUserView;
