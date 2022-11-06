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

import "./LoginForm.css";

export default function LoginForm(props) {
  const routeLink = `/verify/signup`;
  const navigate = useNavigate();
  const [error, setError] = useState();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [userIdentity, setUserIdentity] = useState("");
  const onUsernameChangeHandler = (event) => {
    setUsername(event.target.value);
  };
  const onPasswordChangeHandler = (event) => {
    setPassword(event.target.value);
  };
  const onSubmitHandler = () => {
    props.onLogin(username, password, userIdentity);
    if (username.trim().length === 0) {
      setError({
        title: "Username field Empty",
        message:
          "Please make sure that the passwords match (non-empty values).",
      });
      return;
    }
    navigate(`/verify/dashboard`);
  };
  const resetErrorHandler = () => {
    setError(null);
  };
  const onSelectIdentity = (event: SelectChangeEvent) => {
    setUserIdentity(event.target.value.toString());
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
          Welcome Back!
        </Typography>
        <FormControl fullWidth>
          <InputLabel id="enter-user-name">Username</InputLabel>
          <Input
            id="my-input"
            aria-describedby="my-helper-text"
            sx={{ height: "40%", width: "100%", margin: "12px" }}
            required
            onChange={onUsernameChangeHandler}
          />
        </FormControl>
        <FormControl fullWidth>
          <InputLabel id="enter-password">Password</InputLabel>
          <Input
            id="my-input"
            aria-describedby="my-helper-text"
            sx={{ height: "40%", width: "100%", margin: "12px" }}
            required
            onChange={onPasswordChangeHandler}
          />
        </FormControl>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Sign In as</InputLabel>
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
            <MenuItem value="organization">Organization</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth>
          <Button
            variant="contained"
            className="form-button"
            sx={{ m: "10px", height: "50%", width: "100%" }}
            onClick={onSubmitHandler}
          >
            Login
          </Button>
        </FormControl>
        <Typography>
          Not a Member? Signup <Link to={routeLink}>Here</Link>
        </Typography>
      </div>
    </Fragment>
  );
}
