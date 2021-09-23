import { MoreVert } from "@material-ui/icons"
import "./Post.css"
const Post = ()=>{
    return(
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postLeft">
                        <img className="postProfilePic" src="/assets/person/1.jpeg" alt="ProfilePic"/>
                        <span className="postUsername">Jane Doe</span>
                        <span className="postTime">5 mins ago.</span>
                    </div>
                    <div className="postRight">
                        <MoreVert className="postMoreIcon"/>
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postCaption">Hello world</span>
                    <img className="postImage" src="/assets/post/1.jpeg" alt="PostedImage"/> 
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img className="likeIcon" alt ="" src="/assets/like.png"/>
                        <img className="likeIcon" alt ="" src="/assets/heart.png"/>
                        <span className="likeCount">11 People liked this.</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postComment">11 comments.</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post