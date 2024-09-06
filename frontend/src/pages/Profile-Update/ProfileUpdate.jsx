import React, { useState, useEffect, useContext } from "react";
import "./profileupdate.css";
import assets from "../../assets/assets";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../../config/FaireBase";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import upload from "../../lib/Upload";
import { AppContext } from "../../context/AppContext";

const ProfileUpdate = () => {
  const [image, setImage] = useState(false);
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [uid, setUid] = useState("");
  const [prevImage, setPrevImage] = useState("");

  const { setUserData } = useContext(AppContext);

  const navigate = useNavigate();

  console.log(name, bio, image);
  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUid(user.uid);
        const docRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.data().name) {
          setName(docSnap.data().name);
        }
        if (docSnap.data().bio) {
          setBio(docSnap.data().bio);
        }
        if (docSnap.data().avatar) {
          setPrevImage(docSnap.data().avatar);
        }
      } else {
        navigate("/");
      }
    });
  }, []);

  const profileupdate = async (e) => {
    e.preventDefault();
    try {
      if (!prevImage && !image) {
        toast.error("upload profile picture");
      }
      const docRef = doc(db, "users", uid);
      if (image) {
        const imgURL = await upload(image);
        setPrevImage(imgURL);
        await updateDoc(docRef, {
          avatar: imgURL,
          bio: bio,
          name: name,
        });
      } else {
        await updateDoc(docRef, {
          bio: bio,
          name: name,
        });
      }
      const snap = await getDoc(docRef);
      setUserData(snap.data());
      navigate("/chat");
      toast.success("uploaded succefully");
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };
  return (
    <div className="profile">
      <div className="profile-container">
        <form onSubmit={profileupdate}>
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
          <input
            onChange={(e) => setName(e.target.value)}
            value={name}
            type="text"
            placeholder="your name"
            required
          />
          <textarea
            onChange={(e) => setBio(e.target.bio)}
            value={bio}
            placeholder="write profile bio"
            required
          />
          <button type="submit">Save</button>
        </form>
        <img
          src={
            image
              ? URL.createObjectURL(image)
              : prevImage
              ? prevImage
              : assets.logo_icon
          }
          className="profile-pic"
          alt="logo_icon"
        />
      </div>
    </div>
  );
};

export default ProfileUpdate;
