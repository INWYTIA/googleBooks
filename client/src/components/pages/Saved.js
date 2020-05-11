import React from "react";
import Container from "../Container";
import Result from "../Result";

function Saved(props) {
  return (
    <Container>
      {props.map(item => (
        <Result item={item} />
      ))}
    </Container>
  );
}

export default Saved;
