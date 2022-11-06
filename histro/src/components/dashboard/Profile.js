import React from "react";
import { Fragment } from "react";

import "./Profile.css";

export default function Profile(props) {
  
  return (
    <Fragment>
      <div className="request-division">
        <div className="request-header">
          <span>Education</span>
        </div>
        <div className="profile-wrapper">
          {props.details.map((detail, i) => {
            if (detail.institution != null) {
              return [
                <div className="profile-data">
                  <div className="profile-data-details">
                    <span>
                      <b>{detail.institution.label}: </b>
                    </span>
                    <span>{detail.institution.value}</span>
                  </div>
                  <div className="profile-data-details">
                    <span>
                      <b>{detail.degree.label}: </b>
                    </span>
                    <span>{detail.degree.value}</span>
                  </div>
                  <div className="profile-data-details">
                    <span>
                      <b>{detail.startDate.label}: </b>
                    </span>
                    <span>{detail.startDate.value}</span>
                  </div>
                  <div className="profile-data-details">
                    <span>
                      <b>{detail.endDate.label}: </b>
                    </span>
                    <span>{detail.endDate.value}</span>
                  </div>
                </div>,
              ];
            }
          })}
        </div>
        <div className="request-header">
          <span>Work Experience</span>
        </div>
        <div className="profile-wrapper">
          {props.details.map((detail, i) => {
            if (detail.company != null) {
              return [
                <div className="profile-data">
                  <div className="profile-data-details">
                    <span>
                      <b>{detail.company.label}: </b>
                    </span>
                    <span>{detail.company.value}</span>
                  </div>
                  <div className="profile-data-details">
                    <span>
                      <b>{detail.position.label}: </b>
                    </span>
                    <span>{detail.position.value}</span>
                  </div>
                  <div className="profile-data-details">
                    <span>
                      <b>{detail.startDate.label}: </b>
                    </span>
                    <span>{detail.startDate.value}</span>
                  </div>
                  <div className="profile-data-details">
                    <span>
                      <b>{detail.endDate.label}: </b>
                    </span>
                    <span>{detail.endDate.value}</span>
                  </div>
                </div>,
              ];
            }
          })}
        </div>
      </div>
    </Fragment>
  );
}
