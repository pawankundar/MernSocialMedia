import axios from "axios";
import { useContext, useEffect, useRef, useState } from "react";
import ChatOnlineUser from "../../components/chatOnlineUser/ChatOnlineUsers";
import Conversation from "../../components/conversations/Conversation";
import MessageBubble from "../../components/messageBubble/MessageBubble";
import NavBar from "../../components/navBar/navBar";
import { Context } from "../../context/context";

require("./Message.css");

const Message = () => {
  const { user } = useContext(Context);
  const [conv, setConv] = useState([]);
  const [messages, setMessages] = useState(null);
  const[newMessage,setNewMessage] = useState("")
  const[convId,setConvId] = useState("")
  const scrollRef = useRef()

  useEffect(() => {
    const getConversation = async () => {
      await axios
        .get("/conversation/" + user._id)
        .then((resp) => setConv(resp.data))
        .catch((err) => console.log(err));
    };
    getConversation();
  }, [user._id]);

  useEffect(()=>{
    const getMessage = async()=>{
      await axios.get('/message/'+convId)
      .then(resp => setMessages(resp.data))
      .catch(err=>console.log(err))
    }
    getMessage()
  },[convId])

  useEffect(()=>(
    scrollRef.current?.scrollIntoView({behavior : "smooth"})
  ),[messages])

  const sendMessage = async(e)=>{
    e.preventDefault()
    await axios.post('/message/',{
      conversationId : convId,
      sender : user._id,
      text : newMessage
    })
    .then((resp) => setMessages([...messages,resp.data]) )
    .catch(err=> console.log(err))
    setNewMessage("")
  }
  return (
    <>
      <NavBar />
      <div className="Chat">
        <div className="chatMenu">
          <div className="chatMenuWrapper">
            <input className="searchMenu" placeholder="search for friends" />
            <hr />
            {conv.map((c, k) => (
              <div onClick={()=>setConvId(c._id)}>
              <Conversation conversation={c} currentUser={user} key={k} />
              </div>
            ))}
          </div>
        </div>
        <div className="chatBox">
          <div className="chatBoxWrapper">
            {messages ? (
              <>
                <h3 className="chatWindowUser">Pawan Kundar </h3>
                <hr />
                <div className="chatBoxTop">
                  {
                    messages.map((message,key)=>(
                      <div ref={scrollRef}>
                      <MessageBubble data ={message} key={key}/>
                      </div>
                    ))
                  }
                </div>
                <div className="chatBoxBottom">
                  <textarea className="chatInputBox" placeholder="Message.." onChange={e=>setNewMessage(e.target.value)} value={newMessage}/>
                  <button className="chatSubmitButton" onClick={sendMessage}>Send</button>
                </div>
              </>
            ) : (
              <span className="noConversation">Open a conversation to Chat..</span>
            )}
          </div>
        </div>
        <div className="chatOnline">
          <div className="chatOnlineWrapper">
            <ChatOnlineUser />
          </div>
        </div>
      </div>
    </>
  );
};

export default Message;
