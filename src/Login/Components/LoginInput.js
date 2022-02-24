import React from "react";
import TextField from "@mui/material/TextField";

function LoginInput(props) {
  return (
    <TextField
      margin="normal"
      required
      fullWidth
      id={props.id}
      label={props.label}
      name={props.name}
      autoComplete={props.autocomplete}
      autoFocus
    />
  );
}

export { LoginInput };
