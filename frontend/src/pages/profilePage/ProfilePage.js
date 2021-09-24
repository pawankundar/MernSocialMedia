import Feed from "../../components/feed/Feed";
import LeftBar from "../../components/leftBar/LeftBar";
import NavBar from "../../components/navBar/navBar";
import RightBar from "../../components/rightBar/RightBar";
import "./ProfilePage.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from 'axios'

const ProfilePage = () => {
  const username = useParams().username;
  const [user, setUser] = useState([]);
  useEffect(() => {
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
                src="/assets/post/3.jpeg"
                alt="coverImage"
              />
              <img
                className="profilePicture"
                src="/assets/person/7.jpeg"
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
            <RightBar condition={true} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
