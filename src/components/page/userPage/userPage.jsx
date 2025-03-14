import React, { useState, useEffect } from "react";
import { useNavigate  } from "react-router-dom";
import api from "../../../api";
import Qualities from "../../ui/qualities";
import PropTypes from "prop-types";

const UserPage = ({ userId }) => {
  const [user, setUser] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    api.users.getById(userId).then((data) => setUser(data));
  }, [userId]);

  const handleClick = () => {
    navigate.push(`/users/${userId}/edit`);
  };

  if (user) {
    return (
      <div className="mt-2 p-2">
        <h1>{user.name}</h1>
        <h2>Профессия: {user.profession.name}</h2>
        <Qualities qualities={user.qualities} />
        <p>Встретился {user.completedMeetings}</p>
        <h2>Rate: {user.rate}</h2>
        <button className="mt-2" onClick={handleClick}>
          Изменить
        </button>
      </div>
    );
  } else {
    return <h1>Loading...</h1>;
  }
};

UserPage.propTypes = {
  userId: PropTypes.string.isRequired
};

export default UserPage;
