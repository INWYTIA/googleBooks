import React from "react";
import Container from "../Container";
import Result from "../Result";
import SearchBar from "../SearchBar";

function Search(props) {
  return (
    <div>
      <SearchBar />
      <Container>
        {props.map(item => (
          <Result item={item} />
        ))}
      </Container>
    </div>
  );
}

export default Search;
