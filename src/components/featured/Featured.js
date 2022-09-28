import React from "react";
import "./Featured.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";

const Featured = () => {
  return (
    <div className="featured">
      <div className="featured-top">
        <p className="featured-title">Total revenue</p>
        <MoreVertIcon fontSize="small" />
      </div>
      <div className="featured-bottom">
        <div className="featured-chart">
          <CircularProgressbar value={70} text={"70%"} strokeWidth={5} />
        </div>
        <p className="featured-title">Total sales made today</p>
        <p className="featured-amount">$420</p>
        <p className="featured-description">
          Previous transactions processing. Last payments may not be included.
        </p>
        <div className="featured-summary">
          <div className="featured-item">
            <div className="featured-item-title">Target</div>
            <div className="featured-item-result negative">
              <KeyboardArrowDownIcon fontSize="small" />
              <div className="featured-result-amount">$12.4k</div>
            </div>
          </div>
          <div className="featured-item">
            <div className="featured-item-title">Last week</div>
            <div className="featured-item-result">
              <KeyboardArrowUpOutlinedIcon fontSize="small" />
              <div className="featured-result-amount">$12.4k</div>
            </div>
          </div>
          <div className="featured-item">
            <div className="featured-item-title">Last month</div>
            <div className="featured-item-result positive">
              <KeyboardArrowUpOutlinedIcon fontSize="small" />
              <div className="featured-result-amount">$12.4k</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
