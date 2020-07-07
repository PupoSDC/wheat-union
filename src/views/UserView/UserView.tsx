import React, { FunctionComponent } from "react";
import { useParams } from "react-router-dom";
import useAxios from "axios-hooks";
import { User } from "types/User";
import UserProfile from "components/UserProfile";
import LoadingSpinner from "components/LoadingSpinner";
import { USERS_API, USER_SLUG } from "consts/routes";

const UserView: FunctionComponent<{}> = () => {
  const { [USER_SLUG]: userId } = useParams();
  const [{ data: user, loading }] = useAxios<User>(`${USERS_API}/${userId}`);
  if (loading) {
    return <LoadingSpinner />;
  }
  return <UserProfile {...user} />;
};

export default UserView;
