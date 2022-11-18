import React from "react";
import Select from "react-select";
import PropTypes from "prop-types";

const MultiSelectField = ({ options, onChange, name, label, defaultValue }) => {
  const optionsArray =
    !Array.isArray(options) && typeof options === "object"
      ? Object.values(options)
      : options;

  const handleChange = (value) => {
    onChange({ name: name, value });
  };

  return (
    <div className="mb-4">
      <label>{label}</label>
      <Select
        isMulti
        options={optionsArray}
        defaultValue={defaultValue}
        className="basic-multi-select "
        classNamePrefix="select"
        onChange={handleChange}
        name={name}
        closeMenuOnSelect={false}
      />
    </div>
  );
};
MultiSelectField.propTypes = {
  label: PropTypes.string,
  onChange: PropTypes.func,
  defaultValue: PropTypes.array,
  name: PropTypes.string,
  options: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
};

export default MultiSelectField;
