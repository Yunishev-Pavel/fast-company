import React from "react";
import BookMark from "./bookmark";
import Qualitie from "./quality";
import PropTypes from "prop-types";

const User = ({
  _id,
  name,
  qualities,
  profession,
  completedMeetings,
  rate,
  onDelete,
  bookmark,
  onToggleBookMark
}) => {
  return (
    <tr>
      <td>{name}</td>
      <td>
        {qualities.map((qual) => (
          <Qualitie key={qual._id} {...qual} />
        ))}
      </td>
      <td>{profession.name}</td>
      <td>{completedMeetings}</td>
      <td>{rate} /5</td>
      <td>
        <BookMark
          status={bookmark}
          onClick={() => onToggleBookMark(_id)}
        />
      </td>
      <td>
        <button
          onClick={() => onDelete(_id)}
          className="btn btn-danger"
        >
          delete
        </button>
      </td>
    </tr>
  );
};

User.propTypes = {
  onToggleBookMark: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  qualities: PropTypes.array.isRequired,
  profession: PropTypes.object.isRequired,
  completedMeetings: PropTypes.number.isRequired,
  rate: PropTypes.number.isRequired,
  bookmark: PropTypes.bool.isRequired,
  _id: PropTypes.string.isRequired
};

export default User;
