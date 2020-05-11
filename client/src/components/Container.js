import React from "react";

function Container(props) {

  //props including text content

  return (
    <div>
      {props.text}
      {props.children}
    </div>
  );
}

export default Container;
