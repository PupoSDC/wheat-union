import React, { FunctionComponent } from "react";
import { useParams, Link } from "react-router-dom";
import { Fab } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import { makeStyles } from "@material-ui/core/styles";
import useAxios from "axios-hooks";
import { User } from "types/User";
import UserProfile from "components/UserProfile";
import LoadingSpinner from "components/LoadingSpinner";
import { USERS_API, USER_SLUG, USER_EDIT_ROUTE_GENERATOR } from "consts/routes";


const useStyles = makeStyles((theme) => ({
  fab: {
    position: "absolute",
    bottom: theme.spacing(2),
    left: theme.spacing(2),
    color: theme.palette.common.white,
    backgroundColor: theme.palette.secondary.main,
    "&:hover": {
      backgroundColor: theme.palette.secondary.dark,
    },
  },
}));

const UserView: FunctionComponent<{}> = () => {
  const classes = useStyles();
  const { [USER_SLUG]: userId } = useParams();
  const [{ data: user, loading }] = useAxios<User>(`${USERS_API}/${userId}`);
  if (loading) {
    return <LoadingSpinner />;
  }
  return (
    <UserProfile {...user} >
      <Fab
      component={Link}
      to={USER_EDIT_ROUTE_GENERATOR(userId)}
      aria-label={"Add new user"}
      className={classes.fab}>
        <EditIcon />
      </Fab>
    </UserProfile>
    );
};

export default UserView;
