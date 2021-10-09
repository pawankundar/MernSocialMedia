import Feed from "../../components/feed/Feed";
import LeftBar from "../../components/leftBar/LeftBar";
import NavBar from "../../components/navBar/navBar";
import "./ProfilePage.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from 'axios'
import ProfileRightBar from "../../components/profileRightBar/ProfileRightBar";

const ProfilePage = () => {

  const ImageLink = process.env.REACT_APP_PUBLIC_FOLDER;
  const username = useParams().username;
  const [user, setUser] = useState([]);
  useEffect(() => {
    window.scrollTo(0,0)
    const getUser = async ()=>{
      await axios.get('/users/?username='+username).then(resp=>setUser(resp.data))
    }

    getUser()
  }, [username]);
  return (
    <>
      <NavBar />
      <div className="profilePageContainer">
        <LeftBar />
        <div className="profileRight">
          <div className="profileRIghtTop">
            <div className="profileCover">
              <img
                className="coverPicture"
                src={user.coverPicture?ImageLink+user.coverPicture:ImageLink+"/noCover.jpg"}
                alt="coverImage"
              />
              <img
                className="profilePicture"
                src={user.profilePicture?ImageLink+user.profilePicture:ImageLink+"/person/no-avatar.png"}
                alt="profileImage"
              />
            </div>
            <div className="profileInfo">
              <h4 className="userNameText">{user.username}</h4>
              <span className="userDesc">{user.desc}</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed username={username} />
            <ProfileRightBar data={user}/>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
