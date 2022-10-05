import React, { useState, useEffect } from "react";
import User from "./user";
import Pagination from "./pagination";
import { paginate } from "../utils/paginate";
import PropTypes from "prop-types";
import api from "../api";
import GroupList from "./groupList";

const Users = ({ users: allUsers, ...rest }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [professions, setProfession] = useState(api.professions.fetchAll());
  const [selectedProf, setSelectedProf] = useState();
  const count = allUsers.length;
  const pageSize = 4;
  useEffect(() => {
    api.professions.fetchAll().then((data) => setProfession(data));
  }, []);

  const hadleProfessionSelect = (item) => {
    setSelectedProf(item);
  };
  console.log(professions);

  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex);
  };

  const filteredUsers = selectedProf
    ? allUsers.filter((user) => user.professions === selectedProf)
    : allUsers;
  const userCrop = paginate(filteredUsers, currentPage, pageSize);
  return (
    <>
      {professions && (
        <GroupList
          selectedItem={selectedProf}
          items={professions}
          onItemSelect={hadleProfessionSelect}
        />
      )}

      {count > 0 && (
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Имя</th>
              <th scope="col">Качества</th>
              <th scope="col">Профессия</th>
              <th scope="col">Встретился, раз</th>
              <th scope="col">Оценка</th>
              <th scope="col">Избранное</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {userCrop.map((user) => (
              <User key={user._id} {...rest} {...user} />
            ))}
          </tbody>
        </table>
      )}
      <Pagination
        itemCount={count}
        pageSize={pageSize}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </>
  );
};
Users.propTypes = {
  users: PropTypes.array
};
export default Users;
