import Post from "../post/Post";
import Share from "../share/Share";
import "./Feed.css";
import {Posts } from "../../dummyData"

const Feed = () => {
  return (
    <div className="feed">
      <div className="feedWrapper">
           <Share/>
           {Posts.map((data)=>(
            <Post data={data} key={data.id}/>
           ))}
           
      </div>
    </div>
  );
};

export default Feed;
