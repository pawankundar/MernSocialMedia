import axios from "axios";
import { useEffect, useState } from "react";

require("./ChatOnlineUser.css");

const ChatOnlineUser = ({ userData, currentUser }) => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  const [onlineUser, setOnlineUser] = useState([]);
  useEffect(() => {
    const getUser = async () => {
      await axios
        .get("/users/?userId=" + userData)
        .then((resp) => setOnlineUser(resp.data));
    };
    getUser();
  }, [userData]);
  return (
    <div className="chatOnline">
      <div className="chatOnlineFriend">
        <div className="chatOnlineImgContainer">
          <img
            src={
              onlineUser?.profilePicture
                ? PF + onlineUser.profilePicture
                : PF + "person/no-avatar.png"
            }
            className="chatOnlineImg"
            alt="onlineUserImage"
          />
          <div src="chatOnlineBadge"></div>
        </div>
        <span className="chatOnlineName">{onlineUser.username}</span>
      </div>
    </div>
  );
};

export default ChatOnlineUser;
