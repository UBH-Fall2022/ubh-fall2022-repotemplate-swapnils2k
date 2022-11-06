import React from "react";
import InstituteHeader from "./InstituteHeader";
import { Fragment, useState } from "react";
import InstituteNav from "./InstituteNav";
import InstituteOffer from "./InstituteOffer";
import InstituteUpdate from "./InstituteUpdate";
import InstituteHistory from "./InstituteHistory";

import "../Dashboard.css";

export default function InstituteDashboard(props) {
  const users = [
    { name: "Josh", email: "zerka@gmail.com", password: "1984" },
    { name: "Vikk", email: "vikk@gmail.com", password: "1994" },
    { name: "Simon", email: "simon@gmail.com", password: "1991" },
  ];
  const [tab, setTab] = useState("offer");
  const onChangeTab = (value) => {
    setTab(value);
  };
  return (
    <Fragment>
      <InstituteHeader
        onTabClick={onChangeTab}
        onLogout={props.onLogout}
        activeTab={tab}
      />
      <div className="dashboard-split">
        <InstituteNav
          onTabClick={onChangeTab}
          onLogout={props.onLogout}
          activeTab={tab}
        />
        <div className="dashboard-details">
          {tab === "history" && <InstituteHistory users={users} />}
          {tab === "offer" && <InstituteOffer users={users} />}
          {tab === "update" && <InstituteUpdate users={users} />}
        </div>
      </div>
    </Fragment>
  );
}
