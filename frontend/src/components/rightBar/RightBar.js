import "./RightBar.css";
import { Users } from "../../dummyData";
import OnlineUser from "../onlineUser/OnlineUser";


const RightBar = () => {

  const photoUrl = process.env.REACT_APP_PUBLIC_FOLDER;
  
  return (
    <div className="rightBar">
      <div className="rightBarWrapper">
      <div className="bdayContainer">
          <img className="bdayImage" src={photoUrl+"gift.png"} alt="bdayPic" />
          <span className="bdayText">
            <b>Jhon doe</b> and <b>3 other friends</b> have a birthday
            today.
          </span>
        </div>
        <hr className="rightBarHr" />
        <img
          className="advertise"
          alt="advertisemet"
          src={photoUrl+"ad.png"}
        ></img>
        <h4 className="rightBarTitle">Online Friends</h4>
        <ul className="friendList">
          {Users.map((onlineUser) => (
            <OnlineUser data={onlineUser} key={onlineUser.id} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RightBar;
