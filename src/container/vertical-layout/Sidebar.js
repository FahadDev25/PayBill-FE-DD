import React, { useState } from "react";
import { useLocation, useParams } from "react-router-dom";
const Sidebar = () => {
  const location = useLocation();
  return (
    <div className="sidebar" id="sidebar">
      <div className="sidebar-inner slimscroll">
        <div id="sidebar-menu" className="sidebar-menu">
          <ul>
            <li className="menu-title">
              <span>Main</span>
            </li>
            <li
              id="Dashboard"
              className={location.pathname == "/dashboard" ? "active" : ""}
            >
              <a href="/dashboard">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="feather feather-home"
                >
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  <polyline points="9 22 9 12 15 12 15 22"></polyline>
                </svg>
                <span>Dashboard</span>
              </a>
            </li>
            <li
              id="Bills_Details"
              className={
                location.pathname.match("bill-details") ? "active" : ""
              }
            >
              <a href="/bill-details">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="feather feather-file"
                >
                  <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path>
                  <polyline points="13 2 13 9 20 9"></polyline>
                </svg>
                <span>Bill's Details</span>
              </a>
            </li>
            <li
              id="Bills_History"
              className={
                location.pathname.match("bill-history") ? "active" : ""
              }
            >
              <a href="/bill-history">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="feather feather-airplay"
                >
                  <path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"></path>
                  <polygon points="12 15 17 21 7 21 12 15"></polygon>
                </svg>{" "}
                <span>Bill's History</span>
              </a>
            </li>
            <li
              id="My_Payments"
              className={location.pathname.match("payments") ? "active" : ""}
            >
              <a href="/payments">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="feather feather-database"
                >
                  <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                  <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
                  <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
                </svg>{" "}
                <span>My Payments</span>
              </a>
            </li>
            <li
              id="My_Plan"
              className={location.pathname.match("plans") ? "active" : ""}
            >
              <a href="/plans">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="feather feather-grid"
                >
                  <rect x="3" y="3" width="7" height="7"></rect>
                  <rect x="14" y="3" width="7" height="7"></rect>
                  <rect x="14" y="14" width="7" height="7"></rect>
                  <rect x="3" y="14" width="7" height="7"></rect>
                </svg>{" "}
                <span>My Plan</span>
              </a>
            </li>
            {/* <li id="Balance"><a href="#"><i data-feather="dollar-sign"></i> <span>Balance</span></a></li> */}
            {/* <li><a href="#"><i data-feather="box"></i> <span>SideMenu 4</span></a></li>
<li><a href="#"><i data-feather="box"></i> <span>SideMenu 5</span></a></li> */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
