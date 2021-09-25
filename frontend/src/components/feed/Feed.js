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
          setPost(resp.data);
        })
        : await axios
            .get("posts/timeline/"+user._id)
            .then((resp) => {
              setPost(resp.data);
            });
    };
    getPost();
  }, [username]);

  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {post?.map((data, key) => (
          <Post data={data} key={key} />
        ))}
      </div>
    </div>
  );
};

export default Feed;
