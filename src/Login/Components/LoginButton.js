import React from "react";
import Button from "@mui/material/Button";

function LoginButton(props) {
  return (
    <Button
      type={props.type}
      fullWidth
      variant="contained"
      sx={{ mt: 3, mb: 2 }}
    >
      {props.text}
    </Button>
  );
}

export { LoginButton };
