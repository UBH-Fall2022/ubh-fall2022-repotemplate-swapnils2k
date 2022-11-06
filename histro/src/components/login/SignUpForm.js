import React from "react";
import { Fragment, useState } from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link, useNavigate } from "react-router-dom";
import Modal from "../UI/Modal";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Input from "@mui/material/Input";
// import Web3 from "web3";
// import {
//   metamaskAccount,
//   registerCandidate,
//   registerInstitute,
// } from "../../web3client";

import "./LoginForm.css";

export default function SignUpForm(props) {
  const routeLink = `/verify/login`;
  const navigate = useNavigate();
  const [error, setError] = useState();
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [userIdentity, setUserIdentity] = useState("");
  const onUsernameChangeHandler = (event) => {
    setUsername(event.target.value);
  };
  const onPasswordChangeHandler = (event) => {
    setPassword(event.target.value);
  };
  const onConfirmPasswordChangeHandler = (event) => {
    setConfirmPassword(event.target.value);
  };
  const onNameChangeHandler = (event) => {
    setName(event.target.value);
  };
  const resetErrorHandler = () => {
    setError(null);
  };
  const onSelectIdentity = (event: SelectChangeEvent) => {
    setUserIdentity(event.target.value.toString());
  };

  const onSubmitHandler = () => {
    if (username.trim().length === 0) {
      setError({
        title: "Email not entered",
        message: "Please enter your email.",
      });
      return;
    }
    if (password.trim() !== confirmPassword.trim()) {
      setError({
        title: "Password doesnt match",
        message:
          "Please make sure that the passwords match (non-empty values).",
      });
      return;
    }
    // let userDetail;
    // metamaskAccount()
    //   .then((response) => {
    //     console.log(response);
    //     const account = response.toString();
    //     userDetail = {
    //       account: account,
    //       name: name,
    //       email: username,
    //       password: password,
    //       identity: userIdentity,
    //     };
        // console.log(userDetail);
        //   if (identity === "candidate") {

        //   }
        //   if (identity === "institute") {

        //   } if (identity === "organization")
        // })
        // props.onSignUp(username, password, userIdentity);
        // navigate(`/verify/dashboard`);
      // })
      // .catch((err) => {
      //   console.log(err);
      // });
    // props.onSignUp(username, password, userIdentity);
    // navigate(`/verify/dashboard`);
  };
  return (
    <Fragment>
      {error && (
        <Modal
          title={error.title}
          message={error.message}
          onConfirm={resetErrorHandler}
        />
      )}
      <div className="form">
        <Typography variant="h5" component="div" className="form-field">
          Sign Up Here
        </Typography>
        <FormControl fullWidth>
          <InputLabel id="enter-user-name">Enter Name</InputLabel>
          <Input
            id="my-input"
            aria-describedby="my-helper-text"
            sx={{ m: 1, height: "40%", width: "100%" }}
            required
            onChange={onNameChangeHandler}
          />
        </FormControl>
        <FormControl fullWidth>
          <InputLabel id="enter-user-name">Enter Email</InputLabel>
          <Input
            id="my-input"
            aria-describedby="my-helper-text"
            sx={{ m: 1, height: "40%", width: "100%" }}
            required
            onChange={onUsernameChangeHandler}
          />
        </FormControl>
        <FormControl fullWidth>
          <InputLabel id="enter-user-name">Enter Password</InputLabel>
          <Input
            id="my-input"
            aria-describedby="my-helper-text"
            sx={{ margin: "12px", height: "40%", width: "100%" }}
            required
            onChange={onPasswordChangeHandler}
          />
        </FormControl>
        <FormControl fullWidth>
          <InputLabel id="enter-user-name">Confirm Password</InputLabel>
          <Input
            id="my-input"
            aria-describedby="my-helper-text"
            sx={{ margin: "12px", height: "40%", width: "100%" }}
            required
            onChange={onConfirmPasswordChangeHandler}
          />
        </FormControl>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Sign Up as</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={userIdentity}
            label="identity"
            onChange={onSelectIdentity}
            sx={{ height: "40%", width: "100%", margin: "12px" }}
          >
            <MenuItem value="candidate">Candidate</MenuItem>
            <MenuItem value="institute">Institute</MenuItem>
            <MenuItem value="organization">Company</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth>
          <Button
            variant="contained"
            className="form-button"
            sx={{ margin: "12px", height: "50%", width: "100%" }}
            onClick={onSubmitHandler}
          >
            Sign Up
          </Button>
        </FormControl>
        <Typography>
          Already a Member? Login <Link to={routeLink}>Here</Link>
        </Typography>
      </div>
    </Fragment>
  );
}
