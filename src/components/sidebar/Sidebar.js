import React from "react";
import "./Sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="dashboard-logo">Admin</span>
        </Link>
      </div>
      <hr />
      <div className="sidebar-center">
        <ul>
          <p className="sidebar-items-title">MAIN</p>
          <li>
            <DashboardIcon className="sidebar-icon" />
            <span>Dashboard</span>
          </li>
          <p className="sidebar-items-title">LISTS</p>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="sidebar-icon" />
              <span>Users</span>
            </li>
          </Link>
          <Link to="/products" style={{ textDecoration: "none" }}>
            <li>
              <StoreIcon className="sidebar-icon" />
              <span>Products</span>
            </li>
          </Link>
          <li>
            <CreditCardIcon className="sidebar-icon" />
            <span>Orders</span>
          </li>
          <li>
            <LocalShippingIcon className="sidebar-icon" />
            <span>Delivery</span>
          </li>
          <p className="sidebar-items-title">USEFUL</p>
          <li>
            <InsertChartIcon className="sidebar-icon" />
            <span>Stats</span>
          </li>
          <li>
            <NotificationsNoneIcon className="sidebar-icon" />
            <span>Notifications</span>
          </li>
          <p className="sidebar-items-title">SERVICE</p>
          <li>
            <SettingsSystemDaydreamOutlinedIcon className="sidebar-icon" />
            <span>System Health</span>
          </li>
          <li>
            <PsychologyOutlinedIcon className="sidebar-icon" />
            <span>Logs</span>
          </li>
          <li>
            <SettingsApplicationsIcon className="sidebar-icon" />
            <span>Settings</span>
          </li>
          <p className="sidebar-items-title">USER </p>
          <li>
            <AccountCircleOutlinedIcon className="sidebar-icon" />
            <span>Profile</span>
          </li>
          <li>
            <ExitToAppIcon className="sidebar-icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="sidebar-bottom">
        <div className="theme"></div>
        <div className="theme"></div>
      </div>
    </div>
  );
};

export default Sidebar;
