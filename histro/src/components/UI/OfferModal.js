import React from "react";
import classes from "./Modal.module.css";
import Button from "./Button";
import Card from "./Card";
import { useState } from "react";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Input from "@mui/material/Input";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import TextField from "@mui/material/TextField";

export default function OfferModal(props) {
  const [insDegPos, setDegPos] = useState();

  return (
    <div>
      <div>
        <div className={classes.backdrop} onClick={props.onConfirm} />
        <Card className={classes.modal}>
          <header className={classes.header}>
            <h2>{props.title}</h2>
          </header>
          <div className={classes.content}>
            <FormControl fullWidth>
              <InputLabel id="enter-user-name">Username</InputLabel>
              <Input
                id="my-input"
                aria-describedby="my-helper-text"
                sx={{ height: "40%", width: "100%", margin: "12px" }}
                required
                // onChange={onUsernameChangeHandler}
              />
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DesktopDatePicker
                  label="Start Date"
                  inputFormat="MM/DD/YYYY"
                  //   value={value}
                  //   onChange={handleChange}
                  renderInput={(params) => (
                    <TextField {...params} sx={{ ml: "15px" }} />
                  )}
                />
              </LocalizationProvider>
            </FormControl>
          </div>
          <footer className={classes.actions}>
            <Button onClick={props.onConfirm}>Okay</Button>
          </footer>
        </Card>
      </div>
    </div>
  );
}
