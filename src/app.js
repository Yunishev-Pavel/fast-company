import React from "react";
import Login from "./layouts/login";
import Main from "./layouts/main";
import NavBar from "../src/components/ui/navBar";
import Users from "./layouts/users";

import { Switch, Route, Redirect } from "react-router-dom";
// import Edit from "./components/page/edit";

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/login/:type?" component={Login} />
        <Route path="/users/:userId?/:edit?" component={Users} />
        <Redirect to="Loading..." />
      </Switch>
    </div>
  );
}

export default App;
