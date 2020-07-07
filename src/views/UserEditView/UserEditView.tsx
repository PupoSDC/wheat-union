import React, { FunctionComponent } from "react";
import UserProfileForm from "components/UserProfileForm";
import LoadingSpinner from "components/LoadingSpinner";
import userSchema from "schemas/userSchema";
import useAxios from "axios-hooks";
import axios from 'axios';
import { USER_SLUG, userApiForUserId, userRouteForUserId } from "consts/routes";
import { useParams, useHistory } from "react-router-dom";
import { User, NewUser } from "types/User";

const UserCreateView: FunctionComponent<{}> = () => {
  const history = useHistory();
  const { [USER_SLUG]: userId } = useParams();
  const [{ data: user, loading }] = useAxios<User>(userApiForUserId(userId));


  const onCompleted = async (user: NewUser) => {
    const { data } = await axios.put<User>(userApiForUserId(userId), user);
    const { id } = data;
    history.push(userRouteForUserId(id));
  };


  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <UserProfileForm initialValues={user} schema={userSchema} onCompleted={onCompleted} />
  );
};

export default UserCreateView;
