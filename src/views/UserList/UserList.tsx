import React, { useEffect, useState, FunctionComponent } from "react";
import axios from "axios";
import { List, ListItem, ListItemText, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { USERS_API } from "consts/routes";
import { User } from "types/User";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    padding: 0,
  },
  listItem: {
    backgroundColor: theme.palette.background.default,
    "&:nth-child(odd)": {
      backgroundColor: theme.palette.background.paper,
    },
  },
}));

const UserList: FunctionComponent<{}> = () => {
  const classes = useStyles();
  const [users, setUsers] = useState<User[]>([]);
  useEffect(() => {
    const getUsers = async () => {
      // TODO handle API error...
      const { data: users } = await axios.get(USERS_API);
      setUsers(users);
    };
    getUsers();
  }, []);

  return (
    <List className={classes.root}>
      {users.map(({ username, email, name, id, company: { name: company } }) => (
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
      ))}
    </List>
  );
};

export default UserList;
