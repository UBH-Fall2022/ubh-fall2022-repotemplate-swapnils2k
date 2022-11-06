import React from "react";
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
import { Fragment, useState } from "react";
import dayjs from "dayjs";
import Web3 from "web3";
import { candidateDetailsByAddress, readlog, ciMap } from "../../../web3client";

export default function InstituteUpdate(props) {
  const [details, setDetails] = useState();
  const [selectedUser, setSelectedUser] = useState("");
  const [searchUser, setSearchUser] = useState(false);
  const [error, setError] = useState();
  const onChangeUser = (event) => {
    console.log(event.target.value);
    if (event.target.value.trim().length === 0) {
      setSearchUser(false);
    }
    setSelectedUser(event.target.value);
  };
  const onSelectUserHandler = () => {
    ciMap(selectedUser)
      .then((response) => {
        if (
          String.fromCharCode(response) === "R" ||
          String.fromCharCode(response) === "E"
        ) {
          return;
        } else {
          candidateDetailsByAddress(selectedUser)
            .then((r) => {
              const response = JSON.parse(r);
              console.log(response);
              setDetails(response);
              setSearchUser(true);
              readlog(selectedUser)
                .then((response) => {
                  // console.log(response);
                  // let temp;
                  // response.map((r) => {
                  //   try {
                  //     temp = JSON.parse(r.returnValues.message);
                  //   } catch (e) {
                  //     return;
                  //   }
                  //   console.log(temp);
                  // });
                  const lastTransaction = response[response.length - 1];
                  const temp = JSON.parse(lastTransaction.returnValues.message);
                  console.log(temp);
                })
                .catch((err) => {
                  console.log(err);
                });
            })
            .catch((err) => {
              console.log(err);
            });
        }
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
            <InputLabel id="enter-password" sx={{ marginTop: "12px" }}>
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
                    <span>{details.name}</span>
                  </Typography>
                </div>
                <div>
                  <Typography variant="subtitle1">
                    <span>Email: </span>
                    <span>{details.email}</span>
                  </Typography>
                </div>
              </div>
              <FormControl fullWidth>
                <Button
                  variant="contained"
                  className="form-button"
                  sx={{ m: "10px", height: "60%", width: "20%" }}
                  onClick={onOfferUserHandler}
                >
                  Offer
                </Button>
              </FormControl>
            </div>
          ) : (
            <p>No User selected</p>
          )}
        </div>
      </div>
    </Fragment>
  );
}
