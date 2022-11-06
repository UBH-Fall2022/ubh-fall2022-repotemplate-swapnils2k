import React from "react";
import { Fragment, useState, useEffect } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Profile from "../Profile.js";
import FormControlLabel from "@mui/material/FormControlLabel";
import UniversityOffer from "./UniversityOffer";
import Checkbox from "@mui/material/Checkbox";
import FormControl from "@mui/material/FormControl";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";

import "./InstituteOffer.css";

export default function InstituteHistory(props) {
  const details = [
    {
      institution: {
        label: "Institution",
        value: "State University of New York at Buffalo",
      },
      degree: { label: "Degree", value: "Masters of Science" },
      startDate: { label: "Start Date", value: "08/30/2021" },
      endDate: { label: "End Data", value: "12/30/2022" },
    },
    {
      institution: {
        label: "Institution",
        value: "Rochester Institute of Technology",
      },
      degree: { label: "Degree", value: "Bachelors of Science" },
      startDate: { label: "Start Date", value: "08/30/2016" },
      endDate: { label: "End Date", value: "06/30/2021" },
    },
    {
      company: { label: "Company", value: "Google" },
      position: { label: "Position", value: "Software Engineer I" },
      startDate: { label: "Start Date", value: "08/30/2023" },
      endDate: { label: "End Date", value: "06/30/2025" },
    },
    {
      company: { label: "Company", value: "Microsoft" },
      position: { label: "Position", value: "Software Engineer II" },
      startDate: { label: "Start Date", value: "08/30/2015" },
      endDate: { label: "End Date", value: "06/30/2026" },
    },
  ];
  const [selectedUser, setSelectedUser] = useState(null);
  const [offerUser, setOfferUser] = useState(false);
  const onChangeUser = (_event, user) => {
    console.log(user);
    setSelectedUser(user);
  };
  const onSelectRequestHandler = () => {
    setOfferUser(!offerUser);
  };
  return (
    <Fragment>
      <div className="ins-wrapper">
        <Autocomplete
          freeSolo
          id="free-solo-2-demo"
          disableClearable
          options={props.users.map((option) => option.email)}
          noOptionsText={"User not found"}
          onChange={onChangeUser}
          value={selectedUser}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Search Candidate"
              InputProps={{
                ...params.InputProps,
                type: "search",
              }}
            />
          )}
        />
        <FormControl fullWidth>
          <Button
            variant="contained"
            className="form-button"
            sx={{ m: "10px", height: "60%", width: "20%" }}
            onClick={onSelectRequestHandler}
          >
            <PersonSearchIcon />
            Search
          </Button>
        </FormControl>
        {/* <div className="ins-offer"> */}
        {offerUser && <UniversityOffer />}
        {/* </div> */}

        <Profile details={details} />
      </div>
    </Fragment>
  );
}
