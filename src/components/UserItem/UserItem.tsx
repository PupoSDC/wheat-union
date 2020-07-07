import React, { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import { ListItem, ListItemText, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { User } from "types/User";

const useStyles = makeStyles((theme) => ({
  listItem: {
    backgroundColor: theme.palette.background.default,
    "&:nth-child(odd)": {
      backgroundColor: theme.palette.background.paper,
    },
  },
  block: {
    display: "block",
  }
}));

const UserItem: FunctionComponent<User & { link: string }> = ({
  username,
  email,
  name,
  id,
  company: { name: company },
  link,
}) => {
  const classes = useStyles();
  return (
    <ListItem button component={Link} to={link} className={classes.listItem}>
      <ListItemText
        primary={username}
        secondary={
          <>
            <Typography component="span" className={classes.block} variant="body2" color="textPrimary">
              {name}
            </Typography>
            <Typography component="span" className={classes.block} variant="body2" color="textSecondary">
              {company}
            </Typography>
          </>
        }
      />
    </ListItem>
  );
};

export default UserItem;
