import React from "react";
import "./LeftBar.css";
const LeftBar = () => {
  return (
    <div className="leftBar-container">
      <div
className="separation-border"      >
        <div className="leftBar-row">
          <img src="../../../public/user.jpg" alt="" className="user-img"/>
          <p>user Name</p>
        </div>
        <div className="leftBar-row">
          <img src="../../../public/1 (1).png" alt="" />
          <p>Friends</p>
        </div>
        <div className="leftBar-row">
          <img src="../../../public/2 (1).png" alt="" />
          <p>Groups</p>
        </div>
        <div className="leftBar-row">
          <img src="../../../public/3.png" alt="" />
          <p>MarketPlace</p>
        </div>
        <div className="leftBar-row">
          <img src="../../../public/4.png" alt="" />
          <p>Watch</p>
        </div>
        <div className="leftBar-row">
          <img src="../../../public/5.png" alt="" />
          <p>Memories</p>
        </div>
      </div>
      <div
className="separation-border"      >
        <p style={{ fontSize: "14px", color: "gray", paddingLeft: "20px" }}>
          Your shortcuts
        </p>
        <div className="leftBar-row">
          <img src="../../../public/6.png" alt="" />
          <p>Events</p>
        </div>
        <div className="leftBar-row">
          <img src="../../../public/7.png" alt="" />
          <p>Gaming</p>
        </div>
        <div className="leftBar-row">
          <img src="../../../public/8.png" alt="" />
          <p>Gallery</p>
        </div>
        <div className="leftBar-row">
          <img src="../../../public/9.png" alt="" />
          <p>Videos</p>
        </div>
        <div className="leftBar-row">
          <img src="../../../public/10.png" alt="" />
          <p>Messages</p>
        </div>
      </div>
      <div>
        <p style={{ fontSize: "14px", color: "gray", paddingLeft: "20px" }}>
          Others
        </p>
        <div className="leftBar-row">
          <img src="../../../public/13.png" alt="" />
          <p>Fundraiser</p>
        </div>
        <div className="leftBar-row">
          <img src="../../../public/11.png" alt="" />
          <p>Tutorials</p>
        </div>
        <div className="leftBar-row">
          <img src="../../../public/12.png" alt="" />
          <p>courses</p>
        </div>
      </div>
    </div>
  );
};

export default LeftBar;
