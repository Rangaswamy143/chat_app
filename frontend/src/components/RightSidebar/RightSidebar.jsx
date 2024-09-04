import React from "react";
import "./rightsidebar.css";
import assets from "../../assets/assets";

const RightSidebar = () => {
  return (
    <div className="rs">
      <div className="rs-profile">
        <img src={assets.profile_img} alt="profile_img" />
        <h3>
          Richard Sanford{" "}
          <img src={assets.green_dot} alt="green_dot" className="dot" />
        </h3>
        <p>Hey, There i am Richard Sanford using chat app</p>
      </div>
      <hr />
      <div className="rs-media">
        <p>Media</p>
        <div>
          <img src={assets.pic1} alt="pic" />
          <img src={assets.pic2} alt="pic" />
          <img src={assets.pic3} alt="pic" />
          <img src={assets.pic4} alt="pic" />
          <img src={assets.pic1} alt="pic" />
          <img src={assets.pic2} alt="pic" />
        </div>
      </div>
      <button>Logout</button>
    </div>
  );
};

export default RightSidebar;
