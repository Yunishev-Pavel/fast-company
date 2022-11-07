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

  const handleClick = () => {
    history.push("/users");
  };

  if (user !== undefined) {
    return (
      <div className="mt-2 p-2">
        <h1>{user.name}</h1>
        <h2>Профессия: {user.profession.name}</h2>
        <QualitiesList qualities={user.qualities} />
        <p>Встретился {user.completedMeetings}</p>
        <h2>Rate: {user.rate}</h2>
        <button className="mt-2" onClick={handleClick}>
          Все пользователи
        </button>
      </div>
    );
  }
  return <h1>Loading...</h1>;
};

UserPage.propTypes = {
  userId: PropTypes.string.isRequired
};

export default UserPage;
