import "./SideInfoFriends.css"
const SideInfoFriends = ({name,profilePic}) => {
  const photoUrl = process.env.REACT_APP_PUBLIC_FOLDER

  return (
    <div className="rightBarFollowing">
    <img className="rightBarFollowingImage" src={`${photoUrl}person/${profilePic}.jpeg`} alt="followingPic"/>
    <span className="rightBarFollowingName">{name}</span>
</div>
  );
};

export default SideInfoFriends
