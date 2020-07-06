import React, { FunctionComponent } from "react";
import UserProfileForm from "components/UserProfileForm";
import userSchema from "schemas/userSchema";
import useAxios from "axios-hooks";
import { USER_SLUG, USERS_API } from "consts/routes";
import { useParams } from "react-router-dom";
import { User } from "types/User";

const UserCreateView: FunctionComponent<{}> = () => {
  const { [USER_SLUG]: userId } = useParams();
  const [{ data: user, loading }] = useAxios<User>(`${USERS_API}/${userId}`);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <UserProfileForm initialValues={user} schema={userSchema} onCompleted={(e) => console.log(e)} />
  );
};

export default UserCreateView;
