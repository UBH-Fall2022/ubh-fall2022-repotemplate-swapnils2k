import React from "react";
import { Fragment } from "react";
import SignUpForm from "./SignUpForm";
import "./Login.css";

export default function SignUp(props) {
  return (
    <Fragment>
      <div className="login-split occupy-screen">
        <div className="login-flex-1" />
        <div className="login-flex-2">
          <SignUpForm onSignUp={props.onSignUp} />
        </div>
      </div>
    </Fragment>
  );
}
