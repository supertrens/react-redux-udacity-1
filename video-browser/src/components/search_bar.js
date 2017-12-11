import React from "react";

const SearchBar =({onHandleInputChange})=> {
    return (
      <div className="search-bar">
        <input
          // value={this.state.term}
          onChange={(e)=> onHandleInputChange(e.target.value)}
        />
      </div>

    );

}

export default SearchBar;
