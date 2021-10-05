import ChatOnlineUser from "../../components/chatOnlineUser/ChatOnlineUsers";
import Conversation from "../../components/conversations/Conversation";
import MessageBubble from "../../components/messageBubble/MessageBubble";
import NavBar from "../../components/navBar/navBar";

require("./Message.css");

const Message = () => {
  return (
    <>
      <NavBar />
      <div className="Chat">
          <div className="chatMenu">
              <div className="chatMenuWrapper">
                  <input className="searchMenu" placeholder="search for friends"/>
                  <hr/>              
                  <Conversation/>              
                  <Conversation/>              
                  <Conversation/>              
                  <Conversation/>              
                  <Conversation/>              
              </div>
          </div>
          <div className="chatBox">
              <div className="chatBoxWrapper">
                     <h3 className="chatWindowUser">Pawan Kundar </h3>
                     <hr/>
                 <div className="chatBoxTop">
                     <MessageBubble/>
                     <MessageBubble own={true}/>
                     <MessageBubble/>
                     <MessageBubble own={true}/>
                     <MessageBubble/>
                     <MessageBubble own={true}/>
                     <MessageBubble/>
                     <MessageBubble own={true}/>
                     <MessageBubble/>
                     <MessageBubble own={true}/>
                     <MessageBubble/>
                     <MessageBubble own={true}/>
                 </div>
                 <div className="chatBoxBottom">
                     <textarea className="chatInputBox" placeholder="Message.."/>
                     <button className="chatSubmitButton">Send</button>
                 </div>
              </div>
          </div>
          <div className="chatOnline">
              <div className="chatOnlineWrapper">
                <ChatOnlineUser/>
              </div>
          </div>

      </div>
    </>
  );
};

export default Message;
