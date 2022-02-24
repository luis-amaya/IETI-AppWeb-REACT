import React from "react";

function LoginButton(props) {
  return (
    <input
      type="submit"
      value={props.text}
      className={"form_input-button"}
      id={props.id}
      onClick={() => props.functionToDo()}
    />
  );
}

export { LoginButton };
