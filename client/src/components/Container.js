import React from "react";
import Result from "./Result"

function Container(props) {

  //props including text content

  return (
    <div>
      {props.text}
      {props.items.map(item => (
        <Result item={item} />
      ))}
    </div>
  );
}

export default Container;
