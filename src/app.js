import React from "react";
import Login from "./layouts/login";
import Main from "./layouts/main";
import NavBar from "../src/components/ui/navBar";
import Users from "./layouts/users";

import { Routes, Route, Navigate } from "react-router-dom";
// import Edit from "./components/page/edit";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login/:type?" element={<Login />} />
        <Route path="/users/:userId?/:edit?" element={<Users />} />
        <Route path="*" element={<Navigate to="/Loading..." />} />
      </Routes>
    </div>
  );
}

export default App;
