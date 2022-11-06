import React from "react";
import { Fragment, useState, useEffect } from "react";
import Dashboard from "./Dashboard";
import InstituteDashboard from "./institution/InstituteDashboard";

export default function DashboardRedirect(props) {
  const [identity, setIdentity] = useState();
  useEffect(() => {
    setIdentity(localStorage.getItem("identity"));
    console.log("identity : ", identity);
  }, []);
  return (
    <Fragment>
      {identity === "candidate" && <Dashboard onLogout={props.onLogout} />}
      {identity === "institute" && (
        <InstituteDashboard onLogout={props.onLogout} />
      )}
      {identity === "organization" && <Dashboard onLogout={props.onLogout} />}
    </Fragment>
  );
}
