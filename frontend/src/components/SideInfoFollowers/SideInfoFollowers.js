import { Link } from "react-router-dom";
import "./SideInfoFollowers.css";
const SideInfoFollowers = ({ follower }) => {
  const photoUrl = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <div className="rightBarFollowing">
      <img
        className="rightBarFollowingImage"
        src={
          follower.profilePicture
            ? photoUrl + follower.profilePicture
            : photoUrl + `person/no-avatar.png`
        }
        alt="followingPic"
      />
      <Link to={`/profile/${follower.username}`}  style={{ textDecoration: 'none' , color: 'black' }}>
      <span className="rightBarFollowingName">{follower.username}</span>
      </Link>
    </div>
  );
};

export default SideInfoFollowers;
