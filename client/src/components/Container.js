import React from "react";
import Result from "./Result"

function Container(props) {

  return (
    <div>
      {props.text}
      {props.items.map(item => (
        <Result item={item} handleSave={props.handleSave} />
      ))}
    </div>
  );
}

export default Container;
