import "./RightBar.css";
import { Users } from "../../dummyData";
import OnlineUser from "../onlineUser/OnlineUser";
import SideInfoFriends from "../sideInfoFriends/SideInfoFriends";

const RightBar = ({ data }) => {

  const followers = data?.followers
  const relationshipStatus = ['Single','Married','Not intrested']

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
            <span className="rightBarInfoValue">{data.city}</span>
          </div>
          <div className="rightBarInfoItem">
            <span className="rightBarInfoKey">From:</span>
            <span className="rightBarInfoValue">{data.from}</span>
          </div>
          <div className="rightBarInfoItem">
            <span className="rightBarInfoKey">Relationship:</span>
            <span className="rightBarInfoValue">{relationshipStatus[data.relationship-1]}</span>
          </div>
        </div>
        <h4 className="userFriendsTitle">User followers</h4>
        <div className="rightBarFollowings">
          {followers?.map((userId)=>(
            <SideInfoFriends name={userId} profilePic="1" />
          ))}
          

        </div>
      </>
    );
  };
  return (
    <div className="rightBar">
      <div className="rightBarWrapper">
        {data ? <ProfileRightBar /> : <HomeRightBar />}
      </div>
    </div>
  );
};

export default RightBar;
