import React from "react";

function LoginInput(props) {
  return (
    <div className="form_input">
      <span className="form_input-icon">
        <i className={props.icon}></i>
      </span>
      <input
        type={props.type}
        className="form_input-text"
        aria-label={props.place}
        placeholder={props.place}
        id={props.id}
        name={props.place}
        value={props.value}
        onChange={(ev) => props.functiontoDo(ev.target.value)}
      />
    </div>
  );
}

export { LoginInput };
