import "./SideInfoFriends.css"
const SideInfoFriends = ({name,profilePic}) => {
  return (
    <div className="rightBarFollowing">
    <img className="rightBarFollowingImage" src={`/assets/person/${profilePic}.jpeg`} alt="followingPic"/>
    <span className="rightBarFollowingName">{name}</span>
</div>
  );
};

export default SideInfoFriends
