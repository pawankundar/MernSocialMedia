import { MoreVert } from "@material-ui/icons"
import "./Post.css"
import {Users } from "../../dummyData"
import { useState } from "react"
const Post = ({data})=>{
    const[like,setLike] =useState(data.like)
    const[isLiked,setIsLiked] = useState(false)
    const LikeUpdater = ()=>{
        setLike(isLiked?like-1:like+1)
        setIsLiked(!isLiked)
    }
    return(
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postLeft">
                        <img className="postProfilePic" src={Users[data.id-1].profilePicture} alt="ProfilePic"/>
                        <span className="postUsername">{Users[data.id-1].username}</span>
                        <span className="postTime">{data.date}</span>
                    </div>
                    <div className="postRight">
                        <MoreVert className="postMoreIcon"/>
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postCaption">{data.desc}</span>
                    <img className="postImage" src={data.photo} alt="PostedImage"/> 
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img className="likeIcon" onClick={LikeUpdater} alt ="" src="/assets/like.png"/>
                        <img className="likeIcon" alt ="" src="/assets/heart.png"/>
                        <span className="likeCount">{like} People liked this.</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postComment">{data.comment} comments.</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post