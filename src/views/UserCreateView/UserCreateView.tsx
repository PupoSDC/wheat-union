import React, { FunctionComponent } from "react";
import { useHistory } from "react-router-dom";
import UserProfileForm from "components/UserProfileForm";
import userSchema from "schemas/userSchema";
import { USERS_API, userApiForUserId } from "consts/routes";
import axios from "axios";
import { User, NewUser } from "types/User";

const UserCreateView: FunctionComponent<{}> = () => {
  const history = useHistory();

  const onCompleted = async (user: NewUser) => {
    const { data } = await axios.post<User>(USERS_API, user);
    const { id } = data;
    history.push(userApiForUserId(id));
  };

  return (
    <UserProfileForm
      initialValues={userSchema.cast()}
      schema={userSchema}
      onCompleted={onCompleted}
    />
  );
};

export default UserCreateView;
