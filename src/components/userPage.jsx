import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import api from "../api";
import QualitiesList from "./qualitiesList";
import PropTypes from "prop-types";

const UserPage = ({ userId }) => {
  const [user, setUser] = useState();
  const history = useHistory();
  useEffect(() => {
    api.users.getById(userId).then((data) => setUser(data));
  }, []);
  const handleSave = () => {
    history.push("/users");
  };

  if (user !== undefined) {
    return (
      <div className="mt-2 p-2">
        <h1>{user.name}</h1>
        <h2>Профессия: {user.profession.name}</h2>
        <QualitiesList qualities={user.qualities} />
        <div>Встретился {user.completedMeetings}</div>
        <h4>Rate: {user.rate}</h4>
        <button className="btn btn-outline-dark mt-2" onClick={handleSave}>
          Все пользователи
        </button>
      </div>
    );
  }
  return "Loading...";
};

UserPage.propTypes = {
  userId: PropTypes.string.isRequired
};

export default UserPage;
