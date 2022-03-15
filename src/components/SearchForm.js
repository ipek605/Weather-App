import React from "react";
import PropTypes from "prop-types";
import { AiOutlineSearch } from "react-icons/ai";
import "../styles/searchForm.css";

function SearchForm({ searchText, setSearchText, onSubmit }) {
  const handleInputChange = (event) => setSearchText(event.target.value);

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      onSubmit();
      setSearchText("");
    }
  };
  return (
    <div className="search-form">
      <input
        type="text"
        onChange={handleInputChange}
        value={searchText}
        onKeyUp={handleKeyPress}
        placeholder="Search for a city in UK"
      />
      <button type="submit" onClick={onSubmit} data-testid="searchbutton">
        <AiOutlineSearch className="search-icon" />
      </button>
    </div>
  );
}

export default SearchForm;

SearchForm.propTypes = {
  searchText: PropTypes.string.isRequired,
  setSearchText: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};
