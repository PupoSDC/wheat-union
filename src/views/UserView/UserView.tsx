import React, { FunctionComponent } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import useAxios from "axios-hooks";
import { User } from "types/User";
import UserProfile from "components/UserProfile";
import LoadingSpinner from "components/LoadingSpinner";
import { USERS_API, USER_SLUG, userEditRouteForUserId } from "consts/routes";

const UserView: FunctionComponent<{}> = () => {
  const { [USER_SLUG]: userId } = useParams();
  const [{ data: user, loading }] = useAxios<User>(`${USERS_API}/${userId}`);
  if (loading) {
    return <LoadingSpinner />;
  }
  return (
    <UserProfile {...user}>
      <Button
        component={Link}
        to={userEditRouteForUserId(userId)}
        aria-label={"Add new user"}
        color="secondary"
        variant="contained"
      >
        <EditIcon /> Edit Profile
      </Button>
    </UserProfile>
  );
};

export default UserView;
