import React from "react";
import LoginUI from "./Components/LoginUI";
import LogoSvg from "../Commons/Statics/img";

function Login() {
  return (
    <div className="Container" id="welcome-container">
      <img className="imgsvg" src={LogoSvg} alt="IETI Login Logo" />
      {<LoginUI />}
    </div>
  );
}

export { Login };
