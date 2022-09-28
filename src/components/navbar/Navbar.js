import React from "react";
import "./Navbar.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-wrapper">
        <div className="navbar-search">
          <input type="text" placeholder="Search......" />
          <SearchOutlinedIcon />
        </div>
        <div className="navbar-items">
          <div className="navbar-item">
            <LanguageOutlinedIcon className="navbar-icon" />
            English
          </div>
          <div className="navbar-item">
            <DarkModeOutlinedIcon className="navbar-icon" />
          </div>
          <div className="navbar-item">
            <FullscreenExitOutlinedIcon className="navbar-icon" />
          </div>
          <div className="navbar-item">
            <NotificationsNoneOutlinedIcon className="navbar-icon" />
            <div className="notification-counter">1</div>
          </div>
          <div className="navbar-item">
            <ChatBubbleOutlineOutlinedIcon className="navbar-icon" />
            <div className="notification-counter">2</div>
          </div>
          <div className="navbar-item">
            <ListOutlinedIcon className="navbar-icon" />
          </div>
          <div className="navbar-item">
            <img
              src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="profile-avatar"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
