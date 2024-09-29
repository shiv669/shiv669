import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import dataProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { MessageList } from "./message/MessageList";
import { MessageCreate } from "./message/MessageCreate";
import { MessageEdit } from "./message/MessageEdit";
import { MessageShow } from "./message/MessageShow";
import { NodeList } from "./node/NodeList";
import { NodeCreate } from "./node/NodeCreate";
import { NodeEdit } from "./node/NodeEdit";
import { NodeShow } from "./node/NodeShow";
import { KeyFragmentList } from "./keyFragment/KeyFragmentList";
import { KeyFragmentCreate } from "./keyFragment/KeyFragmentCreate";
import { KeyFragmentEdit } from "./keyFragment/KeyFragmentEdit";
import { KeyFragmentShow } from "./keyFragment/KeyFragmentShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  return (
    <div className="App">
      <Admin
        title={"InvisBoard"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Message"
          list={MessageList}
          edit={MessageEdit}
          create={MessageCreate}
          show={MessageShow}
        />
        <Resource
          name="Node"
          list={NodeList}
          edit={NodeEdit}
          create={NodeCreate}
          show={NodeShow}
        />
        <Resource
          name="KeyFragment"
          list={KeyFragmentList}
          edit={KeyFragmentEdit}
          create={KeyFragmentCreate}
          show={KeyFragmentShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
