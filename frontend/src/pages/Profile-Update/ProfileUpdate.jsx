import React, { useState, useEffect } from "react";
import "./profileupdate.css";
import assets from "../../assets/assets";

const ProfileUpdate = () => {
  const [image, setImage] = useState(false);
  useEffect(() => {});
  console.log(image);
  return (
    <div className="profile">
      <div className="profile-container">
        <form>
          <h3>Profile Details</h3>
          <label htmlFor="avatar">
            <input
              onChange={(e) => setImage(e.target.files[0])}
              type="file"
              id="avatar"
              accept=".png, .jpg, jpeg"
              hidden
            />
            <img
              src={image ? URL.createObjectURL(image) : assets.avatar_icon}
              alt="avatar_icon"
            />
            upload profile image
          </label>
          <input type="text" placeholder="your name" required />
          <textarea placeholder="write profile bio" required />
          <button type="submit">Save</button>
        </form>
        <img
          src={image ? URL.createObjectURL(image) : assets.logo_icon}
          className="profile-pic"
          alt="logo_icon"
        />
      </div>
    </div>
  );
};

export default ProfileUpdate;
