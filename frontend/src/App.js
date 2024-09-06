import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import Login from "./pages/Login/Login";
import Chat from "./pages/Chat/Chat";
import ProfileUpdate from "./pages/Profile-Update/ProfileUpdate";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { onAuthStateChanged } from "firebase/auth";
import { useContext, useEffect } from "react";
import { auth } from "./config/FaireBase";
import { AppContext } from "./context/AppContext";

function App() {
  const navigate = useNavigate();
  const { LoadUserData } = useContext(AppContext);
  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        navigate("/chat");
        await LoadUserData(user.uid);
        // console.log(user)
      } else {
        navigate("/");
      }
    });
  }, []);
  return (
    <div className="App">
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/profile" element={<ProfileUpdate />} />
      </Routes>
    </div>
  );
}

export default App;
