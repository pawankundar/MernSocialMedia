require('./ChatOnlineUser.css')

const ChatOnlineUser = ()=>{
    return(
        <div className="chatOnline">
             <span className="chatOnlineLabel">Online users.</span>
             <hr className="chatOnlineHr"/>
            <div className="chatOnlineFriend">
                <div className="chatOnlineImgContainer">
                    <img src="http://localhost:8000/images/person/1.jpg" className="chatOnlineImg" alt="onlineUserImage"/>
                    <div src="chatOnlineBadge"></div>
                </div>
                <span className="chatOnlineName">Pawan Kundar</span>
            </div>
        </div>
    )
}

export default ChatOnlineUser