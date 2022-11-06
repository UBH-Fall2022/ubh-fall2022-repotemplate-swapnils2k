import React from "react";
import { Fragment } from "react";
import LoginForm from "./LoginForm";
import "./Login.css";

export default function Login(props) {
  return (
    <Fragment>
      <div className="login-split occupy-screen">
        <div className="login-flex-1" />
        <div className="login-flex-2">
          <LoginForm onLogin={props.onLogin} />
        </div>
      </div>
    </Fragment>
  );
}
