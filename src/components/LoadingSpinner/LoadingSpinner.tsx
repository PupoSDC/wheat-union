import React, { FunctionComponent } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, CircularProgressProps } from "@material-ui/core";
import Logo from 'components/Logo';

const useStyles = makeStyles((theme) => ({
  icon: {
    color: "rgba(0, 0, 0, 0.33)",
    animation: "$pulse 1.5s ease-in-out 0.5s infinite",
    margin: "auto",
    fontSize: 75,
  },
  "@keyframes pulse": {
    "0%": {
      transform: "scale(0.95)",
      opacity: 1,
    },
    "70%": {
      transform: "scale(1)",
      opacity: 0.4,
    },
    "100%": {
      transform: "scale(0.95)",
      opacity: 1,
    }
  }
}));

const LoadingSpinner: FunctionComponent<CircularProgressProps> = (props) => {
  const classes = useStyles();
  return <Logo className={classes.icon} />;
}

export default LoadingSpinner;
