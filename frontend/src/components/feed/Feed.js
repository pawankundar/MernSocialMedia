import Post from "../post/Post";
import Share from "../share/Share";
import { useEffect, useState } from "react";
import axios from "axios";
import "./Feed.css";

const Feed = ({ username }) => {
  const [post, setPost] = useState([]);

  useEffect(() => {
    const getPost = async () => {
      username
        ? await axios.get("/posts/profile/"+username).then((resp) => {
          setPost(resp.data);
        })
        : await axios
            .get("posts/timeline/" + "6145862dbd01da67ccfadd3f")
            .then((resp) => {
              setPost(resp.data);
            });
    };
    getPost();
  }, []);

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
