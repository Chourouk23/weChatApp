import React from "react";
import "./RightBar.css";
const RightBar = () => {
  return (
    <div className="rightBar">
      <div className="item">
        <p style={{ fontSize: "14px", color: "gray", fontWeight: "600" }}>
          Suggestions for you
        </p>
        <div className="invit-row">
          <div>
            <img src="../../../public/user.jpg" alt="" className="user-img" />
            <p>user Name</p>
          </div>
          <div>
            <button className="follow-btn">follow</button>
            <button className="dismiss-btn">dismiss</button>
          </div>
        </div>
        <div className="invit-row">
          <div>
            <img src="../../../public/user.jpg" alt="" className="user-img" />
            <p>user Name</p>
          </div>
          <div>
            <button className="follow-btn">follow</button>
            <button className="dismiss-btn">dismiss</button>
          </div>
        </div>
      </div>
      <div className="item">
        <p style={{ fontSize: "14px", color: "gray", fontWeight: "600" }}>
          Latest Activities
        </p>
        <div className="notif-row">
          <div>
            <img src="../../../public/user.jpg" alt="" className="user-img" />
            <p>
              user Name<span> liked your post</span>
            </p>
          </div>
          <p className="time">1 min ago</p>
        </div>
        <div className="notif-row">
          <div>
            <img src="../../../public/user.jpg" alt="" className="user-img" />
            <p>
              user Name<span> liked your post</span>
            </p>
          </div>
          <p className="time">1 min ago</p>
        </div>
        <div className="notif-row">
          <div>
            <img src="../../../public/user.jpg" alt="" className="user-img" />
            <p>
              user Name <span>liked your post</span>
            </p>
          </div>
          <p className="time">1 min ago</p>
        </div>
        <div className="notif-row">
          <div>
            <img src="../../../public/user.jpg" alt="" className="user-img" />
            <p>
              user Name<span> liked your post</span>
            </p>
          </div>
          <p className="time">1 min ago</p>
        </div>
      </div>
      <div className="item third-item">
        <p style={{ fontSize: "14px", color: "gray", fontWeight: "600" }}>
          Online friends
        </p>
        <div className="friends-row">
          <img src="../../../public/user.jpg" alt="" className="user-img" />
          <div className="online-sign" />
          <p>friend Name</p>
        </div>
        <div className="friends-row">
          <img src="../../../public/user.jpg" alt="" className="user-img" />
          <div className="online-sign" />
          <p>friend Name</p>
        </div>
        <div className="friends-row">
          <img src="../../../public/user.jpg" alt="" className="user-img" />
          <div className="online-sign" />
          <p>friend Name</p>
        </div>
        <div className="friends-row">
          <img src="../../../public/user.jpg" alt="" className="user-img" />
          <div className="online-sign" />
          <p>friend Name</p>
        </div>
        <div className="friends-row">
          <img src="../../../public/user.jpg" alt="" className="user-img" />
          <div className="online-sign" />
          <p>friend Name</p>
        </div>
      </div>
    </div>
  );
};

export default RightBar;
