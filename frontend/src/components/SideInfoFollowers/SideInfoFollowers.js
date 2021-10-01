import { Link } from "react-router-dom";
import "./SideInfoFollowers.css";
const SideInfoFollowers = ({ follower }) => {
  const photoUrl = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <div className="rightBarFollowing">
      <Link to={`/profile/${follower.username}`}  
      style={{ textDecoration: 'none' , color: 'black' ,display:"flex",flexDirection:"column" ,flex : "wrap",justifyContent:"space-between"}}
      >
      <img
        className="rightBarFollowingImage"
        src={
          follower.profilePicture
            ? photoUrl + follower.profilePicture
            : photoUrl + `person/no-avatar.png`
        }
        alt="followingPic"
      />
      <span className="rightBarFollowingName">{follower.username}</span>
      </Link>
    </div>
  );
};

export default SideInfoFollowers;
