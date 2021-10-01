import { Cancel, EmojiEmotions, Label, PermMedia, Room } from "@material-ui/icons";
import axios from "axios";
import { useContext, useRef, useState } from "react";
import { Context } from "../../context/context";
import "./Share.css";
const Share = () => {
  const {user} = useContext(Context)
  const ImageLink = process.env.REACT_APP_PUBLIC_FOLDER;
  const [file,setFile] = useState(null)
  const captionRef = useRef()

  const handlePost = async(e)=>{
    e.preventDefault()
    const newPost = {
      userId : user._id,
      desc : captionRef.current.value
    }
    if(file){
      const data = new FormData()
      const fileName = "post/"+Date.now()+file.name
      data.append("name",fileName)
      data.append("file",file)
      newPost.img = fileName
      await axios.post('/upload',data)
      .then(console.log("image uploaded"))
      .catch(console.log("error in upload"))
    }
    await axios.post("/posts/create",newPost)
    .then(window.location.reload())
    .catch(err=>console.log(err))

  }
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img
            className="shareProfileImage"
            src={user.profilePicture?ImageLink+user.profilePicture:ImageLink+"/person/no-avatar.png"}
            alt="share"
          />
          <input className="shareInput" placeholder={"whats on your mind "+user.username+" ?"} ref={captionRef}/>
        </div>
        <hr className="shareHr" />
        {file &&
         <div className="selectedImageContainer">
           <img className = "selectedImage" src={URL.createObjectURL(file)} alt="selectedImage"/>
           <Cancel className="cancelImage" onClick={() => setFile(null)}/>
          </div>}
        <div className="shareBottom">
          <div className="shareOptions">
            <label htmlFor="file" className="shareOption">
              <PermMedia htmlColor="tomato" className="shareIcon" />
              <span className="shareOptionText ">Photo or video</span>
              <input style={{display : "none"}} type="file" id="file" accept=".png,.jpeg,.jpg" onChange={e=>setFile(e.target.files[0])}/>
            </label>
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
          <button className="postButton" onClick={handlePost}>Post</button>
        </div>
      </div>
    </div>
  );
};

export default Share;
