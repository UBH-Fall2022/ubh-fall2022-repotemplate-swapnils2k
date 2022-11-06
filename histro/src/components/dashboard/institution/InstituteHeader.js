import React from "react";
import { Fragment, useState } from "react";
import LogoDevTwoToneIcon from "@mui/icons-material/LogoDevTwoTone";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import CircleNotificationsOutlinedIcon from "@mui/icons-material/CircleNotificationsOutlined";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import CheckBoxOutlinedIcon from "@mui/icons-material/CheckBoxOutlined";
import LogoutIcon from "@mui/icons-material/Logout";
import Button from "@mui/material/Button";

export default function InstituteHeader(props) {
  const onButtonClick = (event) => {
    props.onTabClick(event.currentTarget.value);
  };
  return (
    <Fragment>
      <div className="dashboard-header-flex">
        <div className="header-bg">
          <LogoDevTwoToneIcon sx={{ fontSize: "80px" }} />
          <div className="header-nav">
            <Button
              sx={{
                m: 1,
                height: "100%",
                color: "black",
                width: "8%",
                padding: 0,
                margin: 0,
                backgroundColor: props.activeTab === "offer" ? "lightblue" : "",
              }}
              value="offer"
              onClick={onButtonClick}
            >
              {props.newRequests === true ? (
                <NotificationsActiveOutlinedIcon sx={{ fontSize: "40px" }} />
              ) : (
                <CircleNotificationsOutlinedIcon sx={{ fontSize: "40px" }} />
              )}
            </Button>
            <Button
              sx={{
                m: 1,
                height: "100%",
                color: "black",
                width: "8%",
                margin: 0,
                padding: 0,
                backgroundColor:
                  props.activeTab === "update" ? "lightblue" : "",
              }}
              value="update"
              onClick={onButtonClick}
            >
              <Person2OutlinedIcon sx={{ fontSize: "40px" }} />
            </Button>
            <Button
              sx={{
                m: 1,
                height: "100%",
                color: "black",
                width: "8%",
                margin: 0,
                padding: 0,
                backgroundColor:
                  props.activeTab === "accepted" ? "lightblue" : "",
              }}
              value="accepted"
              onClick={onButtonClick}
            >
              <CheckBoxOutlinedIcon sx={{ fontSize: "40px" }} />
            </Button>
            <Button
              sx={{
                m: 1,
                height: "100%",
                color: "black",
                width: "8%",
                margin: 0,
                padding: 0,
              }}
              onClick={props.onLogout}
            >
              <LogoutIcon sx={{ fontSize: "40px" }} />
            </Button>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
