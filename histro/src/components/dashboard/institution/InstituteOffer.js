import React from "react";
import { Fragment, useState, useEffect } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import Input from "@mui/material/Input";
import Profile from "../Profile.js";
import FormControlLabel from "@mui/material/FormControlLabel";
import UniversityOffer from "./UniversityOffer";
import Checkbox from "@mui/material/Checkbox";
import FormControl from "@mui/material/FormControl";
import Typography from "@mui/material/Typography";
import Modal from "../../UI/Modal";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs from "dayjs";
import Web3 from "web3";
import { candidateDetailsByAddress, request } from "../../../web3client";

import "./InstituteOffer.css";

export default function InstituteOffer(props) {
  const [details, setDetails] = useState();
  const [selectedUser, setSelectedUser] = useState("");
  const [searchUser, setSearchUser] = useState(false);
  const [error, setError] = useState();
  const [value, setValue] = React.useState(dayjs());
  const [degree, setDegree] = useState();
  const [field, setField] = useState();
  const handleChange = (newValue) => {
    console.log(newValue.toString());
    setValue(newValue);
  };

  const onDegreeChangeHandler = (event) => {
    setDegree(event.target.value);
  };
  const onFieldChangeHandler = (event) => {
    setField(event.target.value);
  };
  const onChangeUser = (event) => {
    console.log(event.target.value);
    if (event.target.value.trim().length === 0) {
      setSearchUser(false);
    }
    setSelectedUser(event.target.value);
  };
  const onSelectUserHandler = () => {
    candidateDetailsByAddress(selectedUser)
      .then((r) => {
        const response = JSON.parse(r);
        console.log(response);
        setDetails(response);
        setSearchUser(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const onSubmitHandler = () => {
    // if (degree.trim().length > 0 && field.trim().length > 0) {
    //   const offerDetails = {
    //     degree: degree,
    //     field: field,
    //     date: value.format("DD/MM/YYYY").toString(),
    //   };
    //   console.log(offerDetails);
    // }
    request(selectedUser)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const onOfferUserHandler = () => {
    if (selectedUser.trim().length === 0) {
      setError({
        title: "User Not Selected",
        message: "Please select a user to send offer.",
      });
      return;
    }
  };
  const resetErrorHandler = () => {
    setError(null);
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
      <div className="ins-wrapper">
        <div className="ins-one">
          <FormControl fullWidth>
            <InputLabel id="search-user" sx={{ marginTop: "12px" }}>
              Search User
            </InputLabel>
            <Input
              id="my-input"
              aria-describedby="my-helper-text"
              sx={{ height: "40%", width: "40%", margin: "15px" }}
              required
              onChange={onChangeUser}
            />
          </FormControl>
          <FormControl fullWidth>
            <Button
              variant="contained"
              className="form-button"
              sx={{ m: "10px", height: "60%", width: "20%" }}
              onClick={onSelectUserHandler}
            >
              Search
            </Button>
          </FormControl>
        </div>
        <div className="ins-one">
          {searchUser === true ? (
            <div>
              <div className="ins-offer-pdetails">
                <div>
                  <Typography variant="subtitle1">
                    <span>Name: </span>
                    <span>{details.name.toString()}</span>
                  </Typography>
                </div>
                <div>
                  <Typography variant="subtitle1">
                    <span>Email: </span>
                    <span>{details.email}</span>
                  </Typography>
                </div>
              </div>
              {/* <FormControl fullWidth>
                <Button
                  variant="contained"
                  className="form-button"
                  sx={{ m: "10px", height: "60%", width: "20%" }}
                  onClick={onOfferUserHandler}
                >
                  Offer
                </Button>
              </FormControl> */}
              <div className="ins-request-wrapper">
                {/* <div className="ins-child">
                  <FormControl fullWidth>
                    <InputLabel id="enter-user-name">Degree</InputLabel>
                    <Input
                      id="my-input"
                      aria-describedby="my-helper-text"
                      sx={{ height: "40%", width: "100%", margin: "12px" }}
                      required
                      onChange={onDegreeChangeHandler}
                    />
                  </FormControl>
                </div>
                <div className="ins-child">
                  <FormControl fullWidth>
                    <InputLabel id="enter-user-name">Field of Study</InputLabel>
                    <Input
                      id="my-input"
                      aria-describedby="my-helper-text"
                      sx={{ height: "40%", width: "100%", margin: "12px" }}
                      required
                      onChange={onFieldChangeHandler}
                    />
                  </FormControl>
                </div>
                <div className="ins-child">
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DesktopDatePicker
                      label="Start Date"
                      inputFormat="MM/DD/YYYY"
                      value={value}
                      onChange={handleChange}
                      renderInput={(params) => (
                        <TextField {...params} sx={{ ml: "15px" }} />
                      )}
                    />
                  </LocalizationProvider>
                </div> */}
                <FormControl fullWidth>
                  <Button
                    variant="contained"
                    className="form-button"
                    sx={{ m: "10px", height: "60%", width: "20%" }}
                    onClick={onSubmitHandler}
                  >
                    Request to Join
                  </Button>
                </FormControl>
              </div>
            </div>
          ) : (
            <p>No User selected</p>
          )}
        </div>
      </div>
    </Fragment>
  );
}
