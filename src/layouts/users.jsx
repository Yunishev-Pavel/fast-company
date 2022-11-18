import React from "react";
import { useParams } from "react-router-dom";
import Edit from "../components/page/edit";
import UserPage from "../components/page/userPage";
import UsersListPage from "../components/page/usersListPage";

const Users = () => {
  const params = useParams();
  const { userId, edit } = params;

  if (userId) {
    if (edit) {
      return <Edit userId={userId} />;
    } else {
      return <UserPage userId={userId} />;
    }
  } else {
    return <UsersListPage />;
  }
};

export default Users;
