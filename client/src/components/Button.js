import React from "react";

function Button(props) {

  //props including text content and onclick listeners

  return (
    <button type="button" className="btn btn-primary" onClick={props.handleSubmit} >{props.text}</button>
  );
}

export default Button;
