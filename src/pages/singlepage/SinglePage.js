import React from "react";
import "./SinglePage.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import List from "../../components/table/Table";

const SinglePage = () => {
  return (
    <div className="singlepage">
      <Sidebar />
      <div className="singlepage-container">
        <Navbar />
        <div className="singlepage-top">
          <div className="singlepage-top-left">
            <div className="singlepage-edit-btn">Edit</div>
            <h5 className="singlepage-title">Information</h5>
            <div className="singlepage-item">
              <img
                src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                alt=""
                className="singlepage-item-img"
              />
              <div className="singlepage-details">
                <h1 className="singlepage-item-title">Jane Doe</h1>
                <div className="singlepage-detail-item">
                  <span className="singlepage-item-key">Email :</span>
                  <span className="singlepage-item-value">
                    janedoe@gmail.com
                  </span>
                </div>
                <div className="singlepage-detail-item">
                  <span className="singlepage-item-key">Phone :</span>
                  <span className="singlepage-item-value">+1 2345 67 89</span>
                </div>
                <div className="singlepage-detail-item">
                  <span className="singlepage-item-key">Address :</span>
                  <span className="singlepage-item-value">
                    Elton St. 234 Garden Yd. NewYork
                  </span>
                </div>
                <div className="singlepage-detail-item">
                  <span className="singlepage-item-key">Country :</span>
                  <span className="singlepage-item-value">USA</span>
                </div>
              </div>
            </div>
          </div>
          <div className="singlepage-top-right">
            <Chart aspect={3 / 1} title="User Spending ( Last 6 Months)" />
          </div>
        </div>
        <div className="singlepage-bottom">
          <h1 className="singlepage-title">Last Transactions</h1>
          <List />
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
