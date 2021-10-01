import "./RightBar.css";
import { Users } from "../../dummyData";
import OnlineUser from "../onlineUser/OnlineUser";
import SideInfoFollowers from "../SideInfoFollowers/SideInfoFollowers";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Context } from "../../context/context";
import { Add } from "@material-ui/icons";

const RightBar = ({ data }) => {
  const { user: currentUser ,dispatch} = useContext(Context);
  const relationshipStatus = ["Single", "Married", "Not intrested"];
  const [followers, setFollowers] = useState([]);
  const [followed,setFollowed] = useState(currentUser.following.includes(data?._id))
  


  useEffect(() => {
    const getFollowers = async () => {
      axios
        .get("/users/followers/" + data?._id)
        .then((resp) => setFollowers(resp.data))
        .catch(() => console.log("error in getFollowers RightBar"));
    };
    getFollowers();
  }, [data?._id]);

  useEffect(()=>{
    setFollowed(currentUser.following.includes(data?._id))
  },
  [data?._id,currentUser])

  const handleFollow =async(e)=>{
    e.preventDefault()
    await axios.put(`/users/${data._id}/follow`,{
      userId : currentUser._id
    })
    dispatch({type : "FOLLOW",payload : data._id})
    setFollowed(!followed)
    window.location.reload();

  }

  const handleUnfollow =  async(e)=>{
    e.preventDefault()
    await axios.put(`/users/${data._id}/unfollow`,{
      userId : currentUser._id
    })
    dispatch({type : "UNFOLLOW",payload :data._id})
    setFollowed(!followed)
    window.location.reload();
  }


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
          {Users.map((onlineUser) => (
            <OnlineUser data={onlineUser} key={onlineUser.id} />
          ))}
        </ul>
      </>
    );
  };

  const ProfileRightBar = () => {
    return (
      <>
        {currentUser.username !== data.username &&
         (<button  onClick={followed?handleUnfollow:handleFollow} className="followButton">{ followed?"Unfollow" :"Follow"} <Add/></button>)}
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
            <span className="rightBarInfoValue">
              {relationshipStatus[data.relationship - 1]}
            </span>
          </div>
        </div>

        <h4 className="userFriendsTitle">User followers</h4>
        <div className="rightBarFollowings">
          {followers?.map((follower) => (
            <SideInfoFollowers follower={follower} />
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
