import React from "react";
import { Fragment, useState } from "react";
import Button from "@mui/material/Button";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import CircleNotificationsOutlinedIcon from "@mui/icons-material/CircleNotificationsOutlined";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import CheckBoxOutlinedIcon from "@mui/icons-material/CheckBoxOutlined";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import Typography from "@mui/material/Typography";

import "./DashboardNav.css";

export default function DashboardNav(props) {
  const onButtonClick = (event) => {
    props.onTabClick(event.currentTarget.value);
  };
  return (
    <Fragment>
      <div className="nav-col">
        <Typography align="center">
          <Button
            sx={{
              m: 1,
              height: "60px",
              color: props.newRequests === true ? "blue" : "black",
              width: "100%",
              padding: 0,
              margin: 0,
              backgroundColor:
                props.activeTab === "requests" ? "lightblue" : "",
            }}
            onClick={onButtonClick}
            value="requests"
          >
            {props.newRequests === true ? (
              <NotificationsActiveOutlinedIcon
                sx={{ fontSize: "40px", margin: 2, padding: 0 }}
              />
            ) : (
              <CircleNotificationsOutlinedIcon
                sx={{ fontSize: "40px", margin: 2, padding: 0 }}
              />
            )}
            <span>Requests</span>
          </Button>
        </Typography>
        <Typography align="center">
          <Button
            sx={{
              m: 1,
              height: "60px",
              color: "black",
              width: "100%",
              padding: 0,
              margin: 0,
              backgroundColor:
                props.activeTab === "accepted" ? "lightblue" : "",
            }}
            onClick={onButtonClick}
            value="accepted"
          >
            <CheckBoxOutlinedIcon
              sx={{ fontSize: "40px", margin: 2, padding: 0 }}
            />
            <span>Accepted</span>
          </Button>
        </Typography>
        <Typography align="center">
          <Button
            sx={{
              m: 1,
              height: "60px",
              color: "black",
              width: "100%",
              padding: 0,
              margin: 0,
              backgroundColor: props.activeTab === "profile" ? "lightblue" : "",
            }}
            onClick={onButtonClick}
            value="profile"
          >
            <Person2OutlinedIcon
              sx={{ fontSize: "40px", margin: 2, padding: 0 }}
            />
            <span>Profile</span>
          </Button>
        </Typography>
        <Typography align="center">
          <Button
            sx={{
              m: 1,
              height: "60px",
              color: "black",
              width: "100%",
              padding: 0,
              margin: 0,
            }}
            onClick={props.onLogout}
          >
            <LogoutOutlinedIcon
              sx={{ fontSize: "40px", margin: 2, padding: 0 }}
            />
            <span>Logout</span>
          </Button>
        </Typography>
      </div>
    </Fragment>
  );
}
