import React from "react";
import { Fragment, useState } from "react";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Input from "@mui/material/Input";
import dayjs from "dayjs";
import TextField from "@mui/material/TextField";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import Button from "@mui/material/Button";

import "./UniversityOffer.css";

export default function UniversityOffer() {
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
  return (
    <Fragment>
      <div className="ins-request-wrapper">
        <div className="ins-child">
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
        </div>
        <FormControl fullWidth>
          <Button
            variant="contained"
            className="form-button"
            sx={{ m: "10px", height: "60%", width: "100%" }}
            // onClick={onSubmitHandler}
          >
            Submit
          </Button>
        </FormControl>
      </div>
    </Fragment>
  );
}
