import React from "react";
import PropTypes from "prop-types";

const SearchBar = ({ search, onChange }) => {
  return (
    <div>
      <div className="form">
        <form className="search__form ">
          <input
            type="text"
            placeholder=" Поиск..."
            className="search_input"
            value={search}
            onChange={onChange}
          />
        </form>
      </div>
    </div>
  );
};

SearchBar.propTypes = {
  search: PropTypes.string,
  onChange: PropTypes.func
};

export default SearchBar;
