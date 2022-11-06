import React from "react";
import { Fragment } from "react";
import Button from "@mui/material/Button";
import Request from "./Request";

import "./Requests.css";

export default function Requests(props) {
  return (
    <Fragment>
      <div className="request-division">
        <div className="request-header">
          <span>Institution Requests</span>
        </div>
        <div className="org">
          {props.requests.map((request, i) => {
            if (request.institution != null) {
              return (
                <Request
                  request={request}
                  key={i}
                  showButton={true}
                  onUserAcceptReject={props.onUserAcceptReject}
                />
              );
            }
          })}
        </div>
        <div className="request-header">
          <span>Company Requests</span>
        </div>
        <div className="org">
          {props.requests.map((request, i) => {
            if (request.company != null) {
              return (
                <Request
                  request={request}
                  key={i}
                  showButton={true}
                  onUserAcceptReject={props.onUserAcceptReject}
                />
              );
            }
          })}
        </div>
      </div>
    </Fragment>
  );
}
