
import "./CloseFriend.css";

const CloseFriend = ({ data }) => {
  const photoUrl = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <li className="leftBarFriend">
      <img
        className="leftBarFriendPic"
        src={photoUrl + data.profilePicture}
        alt="profilePic"
      />
      <span className="leftBarFriendName">{data.username}</span>
    </li>
  );
};

export default CloseFriend;
