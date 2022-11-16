import React from "react";
import "./SearchBar.scss";

const SearchBar = (props) => {
  const { label, searchTerm, handleInput } = props;

  return (
    <form className="search-box">
      <input
        type="text"
        name={label}
        value={searchTerm}
        onInput={handleInput}
        className="search-box__input"
        placeholder="Enter City..."
      />
    </form>
  );
};

export default SearchBar;
