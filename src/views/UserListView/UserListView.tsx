import React, { FunctionComponent, useState } from "react";
import { Link } from "react-router-dom";
import { Divider, Fab, List } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
import useAxios from "axios-hooks";
import { User } from "types/User";
import SearchBox from "components/SearchBox";
import UserItem from "components/UserItem";
import { USERS_API, USERS_CREATE_ROUTE, USERS_ROUTE } from "consts/routes";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
    padding: 0,
  },
  search: {},
  list: {
    overflowY: "scroll",
    flex: 1,
  },
  listItem: {
    backgroundColor: theme.palette.background.default,
    "&:nth-child(odd)": {
      backgroundColor: theme.palette.background.paper,
    },
  },
  fab: {
    position: "absolute",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
    color: theme.palette.common.white,
    backgroundColor: theme.palette.secondary.main,
    "&:hover": {
      backgroundColor: theme.palette.secondary.dark,
    },
  },
}));

const UserListView: FunctionComponent<{}> = () => {
  const [{ data: users = [], loading }] = useAxios<User[]>(USERS_API);
  const [searchKey, setSearchKey] = useState("");
  const classes = useStyles();

  const visibleUsers = searchKey.length
    ? users.filter((user) => {
        return JSON.stringify(user).includes(searchKey);
      })
    : users;

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className={classes.root}>
      <div className={classes.search}>
        <SearchBox searchKey={searchKey} setSearchKey={setSearchKey} />
      </div>
      <Divider />
      <List className={classes.list}>
        {visibleUsers.map((user) => (
          <UserItem key={user.id} {...user} link={`${USERS_ROUTE}/${user.id}`} />
        ))}
      </List>
      <Link to={USERS_CREATE_ROUTE}>
        <Fab aria-label={"Add new user"} className={classes.fab}>
          <AddIcon />
        </Fab>
      </Link>
    </div>
  );
};

export default UserListView;
