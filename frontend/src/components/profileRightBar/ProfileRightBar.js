import "./ProfileRightBar.css";
import SideInfoFollowers from "../SideInfoFollowers/SideInfoFollowers";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Context } from "../../context/context";
import { Add, Message } from "@material-ui/icons";
import { useHistory } from "react-router";
const ProfileRightBar = ({data})=>{

    const history = useHistory();

    const { user: currentUser ,dispatch} = useContext(Context);
    const relationshipStatus = ["Single", "Married", "Not intrested"];
    const [followers, setFollowers] = useState([]);
    const[newConv,setNewConv] = useState(false)
    const [followed,setFollowed] = useState(currentUser.following.includes(data?._id))

    useEffect(() => {
      const getFollowers = async () => {
        axios
          .get("/users/followers/" + data?._id)
          .then((resp) => setFollowers(resp.data))
          .catch((err) => console.log("error in getFollowers RightBar",err));
      };
      getFollowers();
    }, [data?._id,followed]);
  
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
    }
  
    const handleUnfollow =  async(e)=>{
      e.preventDefault()
      await axios.put(`/users/${data._id}/unfollow`,{
        userId : currentUser._id
      })
      dispatch({type : "UNFOLLOW",payload :data._id})
      setFollowed(!followed)
    }

    useEffect(()=>{
        const getConvInfo = async()=>{
            await axios.get(`/conversation/${currentUser._id}/${data._id}`)
            .then(resp =>{setNewConv(resp.data)})
            .catch(err => console.log(err))
        }
        getConvInfo()
    
    },[currentUser,data])
  
    const handleMessage = async()=>{
      if (newConv){
        history.push('/message')
      }
      else{
        await axios.post('/conversation/',{
          senderId : currentUser._id,
          receiverId : data._id
        }).then(()=>history.push('/message'))
        .catch(err => console.log(err))
    
      }

    }
    return(
        <div className="rightBar">
        <div className="rightBarWrapper">
        <div className="profileButtons">
          {currentUser.username !== data.username &&
           (<button  onClick={followed?handleUnfollow:handleFollow} className="followButton">{ followed?"Unfollow" :"Follow"} <Add/></button>)}
           { currentUser.username !== data.username &&
             <button className = "messageButton" onClick={()=>handleMessage()} >Message <Message/></button>
           }
           </div>
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
        </div>
      </div>
       
     
    )
}

export default ProfileRightBar