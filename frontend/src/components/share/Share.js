import { EmojiEmotions, Label, PermMedia, Room } from "@material-ui/icons";
import { useContext } from "react";
import { Context } from "../../context/context";
import "./Share.css";
const Share = () => {
  const {user} = useContext(Context)
  const ImageLink = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img
            className="shareProfileImage"
            src={user.profilePicture?ImageLink+user.profilePicture:ImageLink+"/person/no-avatar.png"}
            alt="share"
          />
          <input className="shareInput" placeholder="whats on your mind" />
        </div>
        <hr className="shareHr" />
        <div className="shareBottom">
          <div className="shareOptions">
            <div className="shareOption">
              <PermMedia htmlColor="tomato" className="shareIcon" />
              <span className="shareOptionText ">Photo or video</span>
            </div>
            <div className="shareOption">
              <Label htmlColor="blue" className="shareIcon" />
              <span className="shareOptionText">Tag</span>
            </div>
            <div className="shareOption">
              <Room htmlColor="green" className="shareIcon" />
              <span className="shareOptionText">Location</span>
            </div>
            <div className="shareOption">
              <EmojiEmotions htmlColor="goldenrod" className="shareIcon" />
              <span className="shareOptionText">Feelings</span>
            </div>
          </div>
          <button className="postButton">Post</button>
        </div>
      </div>
    </div>
  );
};

export default Share;
