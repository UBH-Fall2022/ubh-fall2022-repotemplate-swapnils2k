import React from "react";
import { Fragment } from "react";
import Request from "./Request";

import "./Requests.css";

export default function Accepted() {
  const requests = [
    { institution: "State University of New York at Buffalo" },
    { institution: "Rochester Institute of Technology" },
    { company: "Google" },
    { company: "Microsoft" },
  ];
  return (
    <Fragment>
      <div className="request-division">
        <div className="request-header">
          <span>Institution Requests</span>
        </div>
        <div className="org">
          {requests.map((request, i) => {
            if (request.institution != null) {
              return <Request orgName={request.institution} key={i} showButton={false}/>;
            }
          })}
        </div>
        <div className="request-header">
          <span>Company Requests</span>
        </div>
        <div className="org">
          {requests.map((request, i) => {
            if (request.company != null) {
              return <Request orgName={request.company} key={i} showButton={false}/>;
            }
          })}
        </div>
      </div>
    </Fragment>
  );
}
