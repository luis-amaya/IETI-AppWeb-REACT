import * as React from "react";
import { LoginUI } from "./Components/LoginUI";
import "./scss/Login.scss";

function Login() {
  return (
    <div className="container" id="welcome-container">
      {<LoginUI />}
    </div>
  );
}

export { Login };
