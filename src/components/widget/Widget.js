import React from "react";
import "./Widget.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";

const Widget = (props) => {
  const { type } = props;

  let data;

  const amount = 100;
  const diff = 20;

  if (type === "user") {
    data = {
      title: "Users",
      isMoney: false,
      link: "See all user",
      icon: (
        <PersonOutlinedIcon
          className="widget-icon"
          style={{
            color: "purple",
            backgroundColor: "rgb(253, 124, 253,0.5)",
          }}
        />
      ),
    };
  } else if (type === "order") {
    data = {
      title: "Orders",
      isMoney: false,
      link: "View all orders",
      icon: (
        <ShoppingCartOutlinedIcon
          className="widget-icon"
          style={{
            color: "blue",
            backgroundColor: "rgb(107, 107, 255,0.5)",
          }}
        />
      ),
    };
  } else if (type === "earning") {
    data = {
      title: "Earning",
      isMoney: true,
      link: "View net earnings",
      icon: (
        <MonetizationOnOutlinedIcon
          className="widget-icon"
          style={{
            color: "orange",
            backgroundColor: "rgb(255, 209, 124,0.5)",
          }}
        />
      ),
    };
  } else if (type === "balance") {
    data = {
      title: "Balance",
      isMoney: true,
      link: "See details",
      icon: (
        <AccountBalanceWalletOutlinedIcon
          className="widget-icon"
          style={{
            color: "green",
            backgroundColor: "rgb(125, 255, 125,0.5)",
          }}
        />
      ),
    };
  }

  return (
    <div className="widget">
      <div className="widget-left">
        <span className="widget-title">{data.title}</span>
        <span className="widget-counter">
          {data.isMoney && "$"} {amount}
        </span>
        <span className="widget-link">{data.link}</span>
      </div>
      <div className="widget-right">
        <div className="widget-percentage positive">
          <KeyboardArrowUpIcon />
          {diff}%
        </div>
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;
