import Feed from "../../components/feed/Feed";
import LeftBar from "../../components/leftBar/LeftBar";
import NavBar from "../../components/navBar/navBar";
import RightBar from "../../components/rightBar/RightBar";
import "./ProfilePage.css";
const ProfilePage = () => {
  return (
    <>
      <NavBar />
      <div className="profilePageContainer">
        <LeftBar />
        <div className="profileRight">
          <div className="profileRIghtTop">
              <div className="profileCover">
              <img className="coverPicture" src="/assets/post/3.jpeg" alt="coverImage"/>
              <img className="profilePicture" src="/assets/person/7.jpeg" alt="profileImage"/>
              </div>
              <div className="profileInfo">
                  <h4 className="userNameText">Pawan Kundar</h4>
                  <span className="userDesc">Hello world</span>
              </div>
          </div>
          <div className="profileRightBottom">
            <Feed />
            <RightBar condition= {true} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
