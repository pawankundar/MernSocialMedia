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

const LeftBar = () => {
  return (
    <div className="leftBar">
      <div className="leftBarWrapper">
        <ul className="leftBarList">
          <li className="leftBarListItem">
            <RssFeed classname="leftBarIcon" />
            <span className="leftBarIconText">Feed</span>
          </li>
          <li className="leftBarListItem">
            <Chat classname="leftBarIcon" />
            <span className="leftBarIconText">Chat</span>
          </li>
          <li className="leftBarListItem">
            <PlayCircleFilledOutlined classname="leftBarIcon" />
            <span className="leftBarIconText">Videos</span>
          </li>
          <li className="leftBarListItem">
            <Group classname="leftBarIcon" />
            <span className="leftBarIconText">Groups</span>
          </li>
          <li className="leftBarListItem">
            <Bookmark classname="leftBarIcon" />
            <span className="leftBarIconText">Bookmark</span>
          </li>
          <li className="leftBarListItem">
            <HelpOutline classname="leftBarIcon" />
            <span className="leftBarIconText">Questions</span>
          </li>
          <li className="leftBarListItem">
            <WorkOutline classname="leftBarIcon" />
            <span className="leftBarIconText">Jobs</span>
          </li>
          <li className="leftBarListItem">
            <Event classname="leftBarIcon" />
            <span className="leftBarIconText">Event</span>
          </li>
          <li className="leftBarListItem">
            <School classname="leftBarIcon" />
            <span className="leftBarIconText">Courses</span>
          </li>
        </ul>
        <button className="leftBarButton">Show More</button>
        <hr className="leftBarHr" />
        <ul className="leftBarFriendsList">
          <li className="leftBarFriend">
            <img className="leftBarFriendPic" src="/assets/person/2.jpeg" alt="profilePic" />
            <span className="leftBarFriendName">Pawan Kundar</span>
          </li>
          <li className="leftBarFriend">
            <img className="leftBarFriendPic" src="/assets/person/2.jpeg" alt="profilePic" />
            <span className="leftBarFriendName">Pawan Kundar</span>
          </li>
          <li className="leftBarFriend">
            <img className="leftBarFriendPic" src="/assets/person/2.jpeg" alt="profilePic" />
            <span className="leftBarFriendName">Pawan Kundar</span>
          </li>
          <li className="leftBarFriend">
            <img className="leftBarFriendPic" src="/assets/person/2.jpeg" alt="profilePic" />
            <span className="leftBarFriendName">Pawan Kundar</span>
          </li>
          <li className="leftBarFriend">
            <img className="leftBarFriendPic" src="/assets/person/2.jpeg" alt="profilePic" />
            <span className="leftBarFriendName">Pawan Kundar</span>
          </li>
          <li className="leftBarFriend">
            <img className="leftBarFriendPic" src="/assets/person/2.jpeg" alt="profilePic" />
            <span className="leftBarFriendName">Pawan Kundar</span>
          </li>
          <li className="leftBarFriend">
            <img className="leftBarFriendPic" src="/assets/person/2.jpeg" alt="profilePic" />
            <span className="leftBarFriendName">Pawan Kundar</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LeftBar;
