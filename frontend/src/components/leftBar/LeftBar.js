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
import SuggestedUser from "../SuggestedUser/SuggestedUser";
import {useEffect, useState ,useContext} from "react";
import { Context } from "../../context/context";
import axios from "axios";

const LeftBar = () => {
  const{user:loggedInUser} = useContext(Context)
  
  const [suggestedUsers, setSuggestedUsers] = useState([]);
  useEffect(() => {
    const getUsers = async () => {
      await axios
        .get("/users/all")
        .then((resp) => setSuggestedUsers(resp.data))
        .catch((err) => console.log(err));
    };
    getUsers()

  },[]);

  const removeLoggedInUser = (user)=>{
    if (loggedInUser.following.includes(user._id)|| user.username===loggedInUser.username){
      return false
    }
    return true

  }
  const newArray = suggestedUsers.filter(removeLoggedInUser)
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
        <h4 className="suggetedUserText">Suggested users to follow..</h4>
        <ul className="leftBarFriendsList">
          {newArray.map((data, key) => (
            <SuggestedUser users={data} key={key} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LeftBar;
