import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Context } from "../../context/context";
import { format } from "timeago.js";

require("./MessageBubble.css");

const MessageBubble = ({ data}) => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const{user:currentUser}=useContext(Context)
  const [user, setUser] = useState([]);
  useEffect(() => {
    const getUser = async () => {
      await axios
        .get("/users/?userId=" + data.sender)
        .then((resp) => setUser(resp.data))
        .catch((err) => console.log(err));
    };
    getUser();
  }, [data]);
  return (
    <div className={data.sender===currentUser._id ? "messageBubble own" : "messageBubble"}>
      <div className="bubbleTop">
        <img
          className="chatImage"
          alt="chatImage"
          src={
            user?.profilePicture
              ? PF + user.profilePicture
              : PF + "person/no-avatar.png"
          }
        />
        <p className="messageText">{data.text}</p>
      </div>
      <div className="bubbleBottom">{format(data.createdAt)}</div>
    </div>
  );
};

export default MessageBubble;
