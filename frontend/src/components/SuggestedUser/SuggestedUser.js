import { Link } from "react-router-dom";
import "./SuggestedUser.css";

const SuggestedUser = ({ users }) => {
  const photoUrl = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <li className="leftBarFriend">
      <img
        className="leftBarFriendPic"
        src={users.profilePicture
          ? photoUrl + users.profilePicture
          : photoUrl + `person/no-avatar.png`}
        alt="profilePic"
      />
       <Link to={`/profile/${users.username}`}  style={{ textDecoration: 'none' , color: 'black' }}>
      <span className="leftBarFriendName">{users.username}</span>
      </Link>
    </li>
  );
};

export default SuggestedUser;
