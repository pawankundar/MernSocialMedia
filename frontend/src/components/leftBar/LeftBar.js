import {
  RssFeed,
  Chat,
  PlayCircleFilledOutlined,
  Group,
  Bookmark,
  HelpOutline,
  WorkOutline,
  Event,
  School,
} from "@material-ui/icons";
import "./LeftBar.css";
import CloseFriend from "../closeFriend/CloseFriend";
import { useEffect, useState } from "react";
const axios = require("axios");

const LeftBar = () => {
  const [user, setUser] = useState([]);
  const userId = "6145862dbd01da67ccfadd3f"
  useEffect(() => {
    const getUser = async () => {
      await axios
        .get("/users/?userId="+userId)
        .then((resp) => setUser(resp.data.following))
        .catch((err) => console.log(err));
    };
    getUser()
  }, []);
  return (
    <div className="leftBar">
      <div className="leftBarWrapper">
        <ul className="leftBarList">
          <li className="leftBarListItem">
            <RssFeed className="leftBarIcon" />
            <span className="leftBarIconText">Feed</span>
          </li>
          <li className="leftBarListItem">
            <Chat className="leftBarIcon" />
            <span className="leftBarIconText">Chat</span>
          </li>
          <li className="leftBarListItem">
            <PlayCircleFilledOutlined className="leftBarIcon" />
            <span className="leftBarIconText">Videos</span>
          </li>
          <li className="leftBarListItem">
            <Group className="leftBarIcon" />
            <span className="leftBarIconText">Groups</span>
          </li>
          <li className="leftBarListItem">
            <Bookmark className="leftBarIcon" />
            <span className="leftBarIconText">Bookmark</span>
          </li>
          <li className="leftBarListItem">
            <HelpOutline className="leftBarIcon" />
            <span className="leftBarIconText">Questions</span>
          </li>
          <li className="leftBarListItem">
            <WorkOutline className="leftBarIcon" />
            <span className="leftBarIconText">Jobs</span>
          </li>
          <li className="leftBarListItem">
            <Event className="leftBarIcon" />
            <span className="leftBarIconText">Event</span>
          </li>
          <li className="leftBarListItem">
            <School className="leftBarIcon" />
            <span className="leftBarIconText">Courses</span>
          </li>
        </ul>
        <button className="leftBarButton">Show More</button>
        <hr className="leftBarHr" />
        <ul className="leftBarFriendsList">
          {user?.map((data,key)=>(
            <CloseFriend userId={data} key={key}/>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LeftBar;
