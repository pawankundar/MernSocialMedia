import { MoreVert } from "@material-ui/icons";
import "./Post.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { format } from "timeago.js";
import { Link } from "react-router-dom";
const Post = ({ data }) => {

  const[like,setLike] = useState([])

  const LikeUpdater = async(postId) => {
    await axios.put(`posts/${postId}/like`,{
      "userId" : data.userId
    }).then(()=>{
      window.location.reload()
    })
  };
  const [user, SetUser] = useState([]);
  useEffect(() => {
    const getUser = () => {
      axios
        .get(`users/?userId=${data.userId}`)
        .then((resp) => SetUser(resp.data))
        .catch((err) => console.log(err));
    };
    getUser();
    setLike(data.likes.length)
  }, [data.userId]);
  const photoUrl = process.env.REACT_APP_PUBLIC_FOLDER;
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
              <Link to={`profile/${user.username}`}>
              <span className="postUsername">{user.username}</span>
            </Link>
            <span className="postTime">{format(data.createdAt)}</span>
          </div>
          <div className="postRight">
            <MoreVert className="postMoreIcon" />
          </div>
        </div>
        <div className="postCenter">
          <span className="postCaption">{data.desc}</span>
          <img
            className="postImage"
            src={photoUrl + data.img}
            alt="PostedImage"
          />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img
              className="likeIcon"
              onClick={()=>LikeUpdater(data._id)}
              alt=""
              src="/assets/like.png"
            />
            <img className="likeIcon" alt="" src="/assets/heart.png" />
            <span className="likeCount">
              {like} People liked this.
            </span>
          </div>
          <div className="postBottomRight">
            <span className="postComment">{data.comment} comments.</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
