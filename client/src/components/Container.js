import React from "react";
import Result from "./Result"

function Container(props) {

  //props including text content

  return (
    <div>
      {props.text}
      {props.items ? (props.items.map(item => (
        <Result item={item} />
      ))) : (<p>No Results</p>)
      }
    </div>
  );
}

export default Container;
