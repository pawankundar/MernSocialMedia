import "./OnlineUser.css"
const OnlineUser = ({data})=>{
    const photoUrl = process.env.REACT_APP_PUBLIC_FOLDER
    return(
        <li className="friendOnline">
        <div className="profileImageContainer">
            <img className="profileImage" alt="OnlineFriend" src={photoUrl+data.profilePicture}/>
            <span className="profileOnlineBadge"></span>
        </div>
        <span className="profileName">{data.username}</span> 
   </li>
    )
}

export default OnlineUser