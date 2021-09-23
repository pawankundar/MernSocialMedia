import "./OnlineUser.css"
const OnlineUser = ({data})=>{
    return(
        <li className="friendOnline">
        <div className="profileImageContainer">
            <img className="profileImage" alt="OnlineFriend" src={data.profilePicture}/>
            <span className="profileOnlineBadge"></span>
        </div>
        <span className="profileName">{data.username}</span> 
   </li>
    )
}

export default OnlineUser