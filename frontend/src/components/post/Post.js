import { MoreVert } from "@material-ui/icons";
import "./Post.css";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { format } from "timeago.js";
import { Link } from "react-router-dom";
import { Context } from "../../context/context";
const Post = ({ post }) => {

  const photoUrl = process.env.REACT_APP_PUBLIC_FOLDER;
  const [like, setLike] = useState(post.likes.length);
  const [isLiked, setIsLiked] = useState(false);
  const [user, SetUser] = useState([]);
  const {user : currentUser} = useContext(Context)

  useEffect(() => {
    setIsLiked(post.likes.includes(currentUser._id));
  }, [currentUser._id, post.likes]);


  const LikeUpdater = async() => {
    await axios.put(`posts/${post._id}/like`,{
      "userId" : currentUser._id
    })
    .catch((err)=>{
      console.log(err)
    })
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };

  

  useEffect(() => {
    const getUser = () => {
      axios
        .get(`/users/?userId=${post.userId}`)
        .then((resp) => SetUser(resp.data))
        .catch((err) => console.log(err));
    };
    getUser();
  }, [post.userId]);
  
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postLeft">
            <img
              className="postProfilePic"
              src={
                user.profilePicture
                  ? photoUrl + user.profilePicture
                  : photoUrl + `person/no-avatar.png`
              }
              alt="ProfilePic"
            />
              <Link to={`profile/${user.username}`}  style={{ textDecoration: 'none' , color: 'black' }}>
              <span className="postUsername">{user.username}</span>
            </Link>
            <span className="postTime">{format(post.createdAt)}</span>
          </div>
          <div className="postRight">
            <MoreVert className="postMoreIcon" />
          </div>
        </div>
        <div className="postCenter">
          <span className="postCaption">{post.desc}</span>
          <img
            className="postImage"
            src={photoUrl + post.img}
            alt="PostedImage"
          />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img
              className="likeIcon"
              onClick={LikeUpdater}
              alt=""
              src="/assets/like.png"
            />
            <img className="likeIcon" alt="" src="/assets/heart.png" />
            <span className="likeCount">
              {like} People liked this.
            </span>
          </div>
          <div className="postBottomRight">
            <span className="postComment">{post.comment} comments.</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
