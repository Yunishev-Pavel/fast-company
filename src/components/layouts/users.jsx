import React from "react";
import { useParams } from "react-router-dom";
import UsersList from "../usersList";
import UserPage from "../userPage";

const Users = () => {
  const { userId } = useParams();
  return <>{userId ? <UserPage userId={userId} /> : <UsersList />}</>;
};

export default Users;
