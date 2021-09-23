import "./RightBar.css";
import { Users } from "../../dummyData";
import OnlineUser from "../onlineUser/OnlineUser";
import SideInfoFriends from "../sideInfoFriends/SideInfoFriends";
const RightBar = ({ condition }) => {
  const HomeRightBar = () => {
    return (
      <>
        <div className="bdayContainer">
          <img className="bdayImage" src="/assets/gift.png" alt="bdayPic" />
          <span className="bdayText">
            <b>Pawan Kundar</b> and <b>3 other friends</b> have a birthday
            today.
          </span>
        </div>
        <hr className="rightBarHr" />
        <img
          className="advertise"
          alt="advertisemet"
          src="/assets/ad.png"
        ></img>
        <h4 className="rightBarTitle">Online Friends</h4>
        <ul className="friendList">
          {Users.map((data) => (
            <OnlineUser data={data} key={data.id} />
          ))}
        </ul>
      </>
    );
  };

  const ProfileRightBar = () => {
    return (
      <>
        <h4 className="userInfoTitle">User information</h4>
        <div className="rightBarInfo">
          <div className="rightBarInfoItem">
            <span className="rightBarInfoKey">City:</span>
            <span className="rightBarInfoValue">Mumbai</span>
          </div>
          <div className="rightBarInfoItem">
            <span className="rightBarInfoKey">From:</span>
            <span className="rightBarInfoValue">India</span>
          </div>
          <div className="rightBarInfoItem">
            <span className="rightBarInfoKey">Relationship:</span>
            <span className="rightBarInfoValue">Single</span>
          </div>
        </div>
        <h4 className="userFriendsTitle">User friends</h4>
        <div className="rightBarFollowings">
          <SideInfoFriends name="Pawan Kundar" profilePic="1" />
          <SideInfoFriends name="Dave Lee" profilePic="2" />
          <SideInfoFriends name="Canoopsy" profilePic="3" />
          <SideInfoFriends name="Felix Kjelberg" profilePic="4" />
          <SideInfoFriends name="Jhon Wick" profilePic="5" />
          <SideInfoFriends name="Jane Doe" profilePic="6" />
        </div>
      </>
    );
  };
  return (
    <div className="rightBar">
      <div className="rightBarWrapper">
        {condition ? <ProfileRightBar /> : <HomeRightBar />}
      </div>
    </div>
  );
};

export default RightBar;
