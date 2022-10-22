import React from "react";
import Login from "./components/layouts/login";
import Main from "./components/layouts/main";
import NavBar from "./components/navBar";
import Users from "./components/layouts/users";
import { Switch, Route, Redirect } from "react-router-dom";

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/login" component={Login} />
        <Route path="/users/:userId?" component={Users} />
        <Redirect to="Loading" />
      </Switch>
    </div>
  );
}

export default App;
