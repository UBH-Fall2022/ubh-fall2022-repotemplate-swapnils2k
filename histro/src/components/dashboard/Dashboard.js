import React from "react";
import { Fragment, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DashboardHeader from "./DashboardHeader";
import DashboardNav from "./DashboardNav";
import Requests from "./Requests";
import Profile from "./Profile";
import Accepted from "./Accepted";
import Web3 from "web3";
import {
  instituteDetailsByAddress,
  readlog,
  ciMapByIns,
  request,
  accept,
  reject,
} from "../../web3client";

import "./Dashboard.css";

function Dashboard(props) {
  const institueList = ["0x4b930E7b3E491e37EaB48eCC8a667c59e307ef20"];
  const requests = [
    {
      institution: "State University of New York at Buffalo",
      name: "State University of New York at Buffalo",
    },
    {
      institution: "Rochester Institute of Technology",
      name: "Rochester Institute of Technology",
    },
    { company: "Google", name: "Google" },
    { company: "Microsoft", name: "Microsoft" },
  ];
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
  // const [requests, setRequests] = useState([]);
  const navigate = useNavigate();
  const [tab, setTab] = useState("requests");
  const [newRequests, setNewRequests] = useState(false);
  const onUserAcceptReject = (value, account) => {
    // if (value === "accept") {
    //   accept(account)
    //     .then()
    //     .catch((err) => {
    //       console.log(err);
    //     });
    // } else {
    //   reject(account)
    //     .then()
    //     .catch((err) => {
    //       console.log(err);
    //     });
    // }
  };
  useEffect(() => {
    if (localStorage.getItem("isLoggedIn") !== "1") {
      navigate(`/`);
    }
    // institueList.map((s) => {
    //   ciMapByIns(s)
    //     .then((response) => {
    //       if (String.fromCharCode(response) === "R") {
    //         console.log(String.fromCharCode(response));
    //         instituteDetailsByAddress(s)
    //           .then((r) => {
    //             const response = JSON.parse(r);
    //             console.log(response);
    //             if (response.identity === "institute") {
    //               const detail = {
    //                 name: response.name,
    //                 account: response.account,
    //               };
    //               setRequests([...requests, detail]);
    //             } else {
    //               const detail = { company: response.name };
    //               setRequests([...requests, detail]);
    //             }
    //             if (requests.length > 0) {
    //               setNewRequests(true);
    //             } else {
    //               setNewRequests(false);
    //             }
    //           })
    //           .catch((err) => {
    //             console.log(err);
    //           });
    //       }
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     });
    // });
  }, []);
  const onChangeTab = (value) => {
    setTab(value);
  };
  return (
    <Fragment>
      <DashboardHeader
        onTabClick={onChangeTab}
        onLogout={props.onLogout}
        activeTab={tab}
        newRequests={newRequests}
      />
      <div className="dashboard-split">
        <DashboardNav
          onTabClick={onChangeTab}
          onLogout={props.onLogout}
          activeTab={tab}
          newRequests={newRequests}
        />
        <div className="dashboard-details">
          {tab === "requests" && (
            <Requests
              requests={requests}
              onUserAcceptReject={onUserAcceptReject}
            />
          )}
          {tab === "accepted" && <Accepted />}
          {tab === "profile" && <Profile details={details} />}
        </div>
      </div>
    </Fragment>
  );
}

export default Dashboard;
