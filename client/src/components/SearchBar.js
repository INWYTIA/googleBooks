import React from "react";
import Button from "./Button";

function SearchBar(props) {

  //onchange listener and props for button

  return (
    <div>
      Book Search
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <span className="input-group-text" id="inputGroup-sizing-default">Book</span>
        </div>
        <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" name="search" onChange={props.handleInputChange} />
      </div>
      <Button handleFormSubmit={props.handleFormSubmit} text="Search" />
    </div>
  );
}

export default SearchBar;
