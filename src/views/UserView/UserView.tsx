import React, { FunctionComponent } from "react";
import { useParams } from "react-router-dom";
import useAxios from "axios-hooks";
import { User } from "types/User";
import { USERS_API, USER_SLUG } from "consts/routes";

const UserView: FunctionComponent<{}> = () => {
  const { [USER_SLUG]: userId } = useParams();
  const [{ data: user, loading, error }] = useAxios<User>(`${USERS_API}/${userId}`);
  if (loading) {
    return <h1>Loading...</h1>;
  }
  return <h1>Hello World</h1>;
};

export default UserView;
