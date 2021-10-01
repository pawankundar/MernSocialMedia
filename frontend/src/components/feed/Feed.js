import Post from "../post/Post";
import Share from "../share/Share";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import "./Feed.css";
import { Context } from "../../context/context";

const Feed = ({ username }) => {
  const [post, setPost] = useState([]);

  const{user} = useContext(Context)

  useEffect(() => {
    const getPost = async () => {
      username
        ? await axios.get("/posts/profile/"+username).then((resp) => {
          setPost(resp.data.sort((p1,p2)=>{
            return new Date (p2.createdAt) - new Date (p1.createdAt)
          }));
        })
        : await axios
            .get("posts/timeline/"+user._id)
            .then((resp) => {
              setPost(resp.data.sort((p1,p2)=>{
                return new Date (p2.createdAt) - new Date (p1.createdAt)
              }));
            });
    };
    getPost();
  }, [username,user._id]);

  return (
    <div className="feed">
      <div className="feedWrapper">
        {(!username || user.username === username) && <Share />}
        {post?.map((data, key) => (
          <Post post={data} key={key} />
        ))}
      </div>
    </div>
  );
};

export default Feed;
