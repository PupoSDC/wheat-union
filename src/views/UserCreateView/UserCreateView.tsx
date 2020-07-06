import React, { FunctionComponent } from "react";
import UserProfileForm from "components/UserProfileForm";
import userSchema from "schemas/userSchema";

const UserCreateView: FunctionComponent<{}> = () => {
  return (
    <UserProfileForm
      initialValues={userSchema.cast()}
      schema={userSchema}
      onCompleted={(e) => console.log(e)}
    />
  );
};

export default UserCreateView;
