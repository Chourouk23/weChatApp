import React from "react";
import "./Profile.css";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import SchoolIcon from "@mui/icons-material/School";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
const Profile = () => {
  return (
    <div className="profile-page">
      <div className="profile-images">
        <div className="cover-img">
          <img
            src="https://images.pexels.com/photos/13440765/pexels-photo-13440765.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
        </div>
        <div className="profile-img">
          <img
            src="https://images.pexels.com/photos/14028501/pexels-photo-14028501.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
            alt=""
          />
        </div>
      </div>
      <div className="profile-settings">
        <div className="profile-header">
          <div className="left">
            <div>Timeline</div>
            <div>Friends</div>
          </div>
          <div className="right">
            <div>Photos</div>
            <div>Videos</div>
          </div>
        </div>
        <p className="profile-name">user name</p>
        <div className="profile-content">
          <div className="profile-infos">
            <div className="user-position">
              <SchoolIcon />
              <p>Student</p>
            </div>
            <div className="user-location">
              <HomeIcon />
              <p>Rome,Italy</p>
            </div>
            <div className="social-media-icons">
              <FacebookOutlinedIcon />
              <InstagramIcon />
              <XIcon />
              <LinkedInIcon />
            </div>
          </div>
          <div className="profile-add-post">
            <div className="header">
              <p>Post</p>
              <p>Photo/Video</p>
            </div>
            <div className="content">
              <img
                src="https://images.pexels.com/photos/14028501/pexels-photo-14028501.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
                alt=""
              />
            
              <input type="text" placeholder="What's in your mind?" />
            </div>
            <div className="bottom">
              <select name="" id="">
                <option>Public</option>
                <option>Only Friends</option>
                <option>Private</option>
              </select>
              <button>Post</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
