import React, { useState } from "react";
import "./New.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";

const New = (props) => {
  const { inputs, title } = props;

  const [file, setFile] = useState("");

  const changeHandler = (event) => setFile(event.target.files[0]);

  return (
    <div className="new">
      <Sidebar />
      <div className="new-container">
        <Navbar />
        <div className="new-top">
          <h5>{title}</h5>
        </div>
        <div className="new-bottom">
          <div className="new-bottom-left">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            />
          </div>
          <div className="new-bottom-right">
            <form>
              <div className="form-input">
                <label htmlFor="file">
                  Image:
                  <DriveFolderUploadOutlinedIcon className="image-input-icon" />
                </label>
                <input
                  type="file"
                  id="file"
                  style={{ display: "none" }}
                  onChange={changeHandler}
                />
              </div>
              {inputs.map((input) => (
                <div className="form-input" key={input.id}>
                  <label>{input.label}</label>
                  <input type={input.type} placeholder={input.placeholder} />
                </div>
              ))}
              <button>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
