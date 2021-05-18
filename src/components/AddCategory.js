import React, { useState } from "react";
import PropTypes from "prop-types";

export const AddCategory = ({ setCategories }) => {
  const [inputValue, setinputValue] = useState("");

  const handleInputChange = (e) => {
    setinputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length > 2) {
      setCategories((cate) => [inputValue, ...cate]);
      setinputValue("");
    }
  };
  return (
    <div className="container-fluid">
      <form onSubmit={handleSubmit} className="d-flex">
        <input
          type="search"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Search..."
          className="form-control me-2"
        />
      </form>
    </div>
  );
};

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
};
