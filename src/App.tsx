import React, { FunctionComponent, useState } from "react";
import { CssBaseline } from "@material-ui/core";
import UserList from "views/UserList";
import Header from "components/Header";

const App: FunctionComponent<{}> = () => {
  const [searchKey, setSearchKey] = useState("");
  return (
    <>
      <CssBaseline />
      <Header searchKey={searchKey} setSearchKey={setSearchKey} />
      <UserList />
    </>
  );
};

export default App;
