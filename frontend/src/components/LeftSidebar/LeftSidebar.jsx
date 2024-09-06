import React from "react";
import "./leftsidebar.css";
import assets from "../../assets/assets";
import { Logout } from "../../config/FaireBase";
import { useNavigate } from "react-router-dom";

const LeftSidebar = () => {
  const navigate = useNavigate();
  return (
    <div className="ls">
      <div className="ls-top">
        <div className="ls-nav">
          <img src={assets.logo} className="logo" alt="logo" />
          <div className="menu">
            <img src={assets.menu_icon} alt="menu-icon" />
            <div className="sub-menu">
              <p onClick={() => navigate("/profile")}>Edit Profile</p>
              <hr />
              <p onClick={() => Logout()}>Logout</p>
            </div>
          </div>
        </div>
        <div className="ls-search">
          <img src={assets.search_icon} alt="search_icon" />
          <input type="text" placeholder="Search here" />
        </div>
      </div>
      <div className="ls-list">
        {Array(14)
          .fill("")
          .map((item, index) => (
            <div key={index} className="frineds">
              <img src={assets.profile_img} alt="" />
              <div>
                <p>Richard Sanford</p>
                <span>Hello, How are you</span>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default LeftSidebar;
