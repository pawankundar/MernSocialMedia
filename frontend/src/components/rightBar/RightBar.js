import "./RightBar.css";
import {Users } from "../../dummyData"
import OnlineUser from "../onlineUser/OnlineUser";
const RightBar = ()=>{
    return(
        <div className="rightBar">
            <div className="rightBarWrapper">
                <div className="bdayContainer">
                    <img className="bdayImage" src="/assets/gift.png" alt="bdayPic"/>
                    <span className="bdayText">
                        <b>Pawan Kundar</b> and <b>3 other friends</b> have a birthday today.
                    </span>
                </div>
                <hr className="rightBarHr"/>
                <img className="advertise" alt="advertisemet" src="/assets/ad.png"></img>
                <h4 className="rightBarTitle">Online Friends</h4>
                <ul className="friendList">
                    {Users.map((data)=>(
                        <OnlineUser data={data} key={data.id}/>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default RightBar