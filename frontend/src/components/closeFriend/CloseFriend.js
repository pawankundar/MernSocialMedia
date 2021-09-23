import "./CloseFriend.css"
const CloseFriend = ({data})=>{
    return (
        <li className="leftBarFriend">
        <img className="leftBarFriendPic" src={data.profilePicture} alt="profilePic" />
        <span className="leftBarFriendName">{data.username}</span>
      </li>
    )
}

export default CloseFriend