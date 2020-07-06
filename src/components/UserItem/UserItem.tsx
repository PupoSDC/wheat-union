import React, { FunctionComponent } from "react";
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
}));

const UserItem: FunctionComponent<User> = ({
  username,
  email,
  name,
  id,
  company: { name: company },
}) => {
  const classes = useStyles();
  return (
    <ListItem button key={id} className={classes.listItem}>
      <ListItemText
        primary={username}
        secondary={
          <>
            <Typography component="div" variant="body2" color="textPrimary">
              {name}
            </Typography>
            <Typography component="div" variant="body2" color="textSecondary">
              {company}
            </Typography>
          </>
        }
      />
    </ListItem>
  );
};

export default UserItem;
