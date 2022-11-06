import React from "react";
import { Fragment, useState } from "react";
import Button from "@mui/material/Button";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import CircleNotificationsOutlinedIcon from "@mui/icons-material/CircleNotificationsOutlined";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import CheckBoxOutlinedIcon from "@mui/icons-material/CheckBoxOutlined";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import Typography from "@mui/material/Typography";
import RedeemOutlinedIcon from '@mui/icons-material/RedeemOutlined';
import PersonSearchOutlinedIcon from "@mui/icons-material/PersonSearchOutlined";

export default function InstituteNav(props) {
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
              color: "black",
              width: "100%",
              padding: 0,
              margin: 0,
              backgroundColor: props.activeTab === "history" ? "lightblue" : "",
            }}
            onClick={onButtonClick}
            value="history"
          >
            <PersonSearchOutlinedIcon
              sx={{ fontSize: "40px", margin: 2, padding: 0 }}
            />

            <span>View History</span>
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
              backgroundColor: props.activeTab === "offer" ? "lightblue" : "",
            }}
            onClick={onButtonClick}
            value="offer"
          >
            <RedeemOutlinedIcon
              sx={{ fontSize: "40px", margin: 2, padding: 0 }}
            />
            <span>Offer</span>
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
              backgroundColor: props.activeTab === "update" ? "lightblue" : "",
            }}
            onClick={onButtonClick}
            value="update"
          >
            <Person2OutlinedIcon
              sx={{ fontSize: "40px", margin: 2, padding: 0 }}
            />
            <span>Update</span>
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
