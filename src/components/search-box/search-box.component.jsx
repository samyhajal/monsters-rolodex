import { Component } from "react";
import "./search-box.styles.css";

const SearchBox = ({ onSearchChangeHandler, className, placeholder }) => (
  <input
    className={`search-box ${className}`}
    type="search"
    placeholder={placeholder}
    onChange={onSearchChangeHandler}
  />
);

export default SearchBox;
