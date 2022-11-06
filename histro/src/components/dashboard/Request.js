import React from "react";
import { Fragment } from "react";
import Button from "@mui/material/Button";

import "./Requests.css";

export default function Request(props) {
  const onButtonClick = (event) => {
    console.log(props.request);
    // props.onUserAcceptReject(event.target.value, props.request.account);
  };
  return (
    <Fragment>
      <div className="button-right">
        <span>{props.request.name}</span>
        {props.showButton && (
          <Button
            variant="contained"
            sx={{
              m: 1,
              padding: 1,
              margin: 1,
              padding: "10px 10px",
              margin: "10px",
            }}
            color="success"
            value="accept"
            onClick={onButtonClick}
          >
            Accept
          </Button>
        )}
        {props.showButton && (
          <Button
            variant="contained"
            sx={{
              m: 1,
              padding: "10px 10px",
              margin: "10px",
            }}
            color="error"
            value="reject"
            onClick={onButtonClick}
          >
            Reject
          </Button>
        )}
      </div>
    </Fragment>
  );
}
