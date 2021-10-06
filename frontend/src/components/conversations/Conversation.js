import axios from "axios";
import { useEffect, useState } from "react";

require("./Conversation.css");

const Conversation = ({ conversation, currentUser }) => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [user, setUser] = useState([]);

  useEffect(() => {
    const friendId = conversation.members.find((m) => m !== currentUser._id);
    const getUser = async () => {
      await axios("/users?userId=" + friendId)
        .then((resp) => setUser(resp.data))
        .catch((err) => console.log(err));
    };
    getUser();
  }, [currentUser, conversation]);
  return (
    <div className="messageChats">
      <img
        className="messageImage"
        alt="userImage"
        src={
          user?.profilePicture
            ? PF + user.profilePicture
            : PF + "person/no-avatar.png"
        }
      />
      <span className="messageUsername">{user?.username}</span>
    </div>
  );
};

export default Conversation;
