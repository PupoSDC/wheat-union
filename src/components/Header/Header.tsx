import React, { FunctionComponent } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { APP_NAME } from "consts/generic";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  title: {
    display: "block",
  },
  offset: theme.mixins.toolbar,
}));

const Header: FunctionComponent<{}> = () => {
  const classes = useStyles();

  return (
    <>
      <AppBar position="fixed" color="secondary">
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            {APP_NAME}
          </Typography>
          <div className={classes.grow} />
        </Toolbar>
      </AppBar>
      <div className={classes.offset} />
    </>
  );
};

export default Header;
