import React from "react";
import "./search.scss";

type active = {
  displayFilterBox?: () => void;
};



function Search({ displayFilterBox }: active) {
  return (
    <div className="search">
      <input
        onFocus={displayFilterBox}         
        placeholder="Search"
        type="text"
        name="search"
      />
      <label htmlFor="search" className="label"></label>
    </div>
  );
}

export default Search;
