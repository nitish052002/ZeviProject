import React from "react";
import "./search.scss";
import { ChangeEvent  } from "react";

type active = {
  displayFilterBox?: () => void;
  filterBySearch? : (event: ChangeEvent<HTMLInputElement>)=> void
};



function Search({ displayFilterBox,filterBySearch }: active) {
  return (
    <div className="search">
      <input
        onFocus={displayFilterBox}         
        placeholder="Search"
        type="text"
        name="search"
        onChange={filterBySearch}
      />
      <label htmlFor="search" className="label"></label>
    </div>
  );
}

export default Search;
