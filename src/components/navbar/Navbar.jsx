import React, { useContext } from "react";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/DarkModeContext";
const Navbar = () => {
  const { toggle,isDarkMode }=useContext(DarkModeContext);
  
  return (
    <div className="navbar">
      <div className="leftNavbar">
        <Link to="/" className="custom-link">
          <p>WeChat</p>
        </Link>
        <HomeOutlinedIcon className="iconColor" />
        {
          (isDarkMode ? (
            <LightModeOutlinedIcon
              className="iconColor"
              onClick={toggle}
            />
          ) : (
            <DarkModeOutlinedIcon
              className="iconColor"
              onClick={toggle}
            />
          ))
        }
        <GridViewOutlinedIcon className="iconColor" />
        <div className="search">
          <SearchOutlinedIcon
            className="iconColor"
            style={{ fontSize: "20px" }}
          />
          <input
            placeholder="Search"
            style={{ backgroundColor: "transparent" }}
          />
        </div>
      </div>

      <div className="rightNavbar">
        <PermIdentityOutlinedIcon className="iconColor" />
        <EmailOutlinedIcon className="iconColor" />
        <NotificationsNoneOutlinedIcon className="iconColor" />
        <div className="user">
          <img src="../../../public/user.jpg" alt="" />
          <p>user Name</p>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
