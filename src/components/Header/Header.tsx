import React, { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Button, Toolbar, Typography } from "@material-ui/core";
import Logo from "components/Logo";
import { APP_NAME } from "consts/generic";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  title: {
    paddingLeft: theme.spacing(1),
    display: "block",
  },
  offset: theme.mixins.toolbar,
}));

type HeaderMenuOption = {
  to: string;
  name: string;
};

type HeaderProps = {
  mainRoute: string;
  options?: HeaderMenuOption[];
};

const Header: FunctionComponent<HeaderProps> = ({ mainRoute, options = [] }) => {
  const classes = useStyles();

  return (
    <>
      <AppBar position="fixed" color="secondary">
        <Toolbar>
          <Button component={Link} to={mainRoute} color="inherit">
            <Logo fontSize="large" color="inherit" />
            <Typography className={classes.title} variant="h6" noWrap>
              {APP_NAME}
            </Typography>
          </Button>
          <div className={classes.grow} />
          {options.map(({ to, name }) => (
            <Button component={Link} key={to} to={to} color="inherit">
              {name}
            </Button>
          ))}
        </Toolbar>
      </AppBar>
      <div className={classes.offset} />
    </>
  );
};

export default Header;
