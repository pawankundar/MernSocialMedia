import axios from "axios";
import { useContext, useEffect, useRef, useState } from "react";
import { io } from "socket.io-client";
import ChatOnlineUser from "../../components/chatOnlineUser/ChatOnlineUsers";
import Conversation from "../../components/conversations/Conversation";
import MessageBubble from "../../components/messageBubble/MessageBubble";
import NavBar from "../../components/navBar/navBar";
import { Context } from "../../context/context";
require("./Message.css");

const Message = () => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const { user } = useContext(Context);
  const [conv, setConv] = useState([]);
  const [messages, setMessages] = useState(null);
  const [newMessage, setNewMessage] = useState("");
  const [socketMessage, setSocketMessage] = useState(null);
  const [currentConverSation, setCurrentConverSation] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const [chatUserDetails,setChatUserDetails] = useState(null)

  const scrollRef = useRef();
  const socket = useRef();

  useEffect(() => {
    socket.current = io("ws://localhost:8100");
    socket.current.on("getMessage", (data) => {
      setSocketMessage({
        sender: data.senderId,
        text: data.text,
        createdAt: Date.now(),
      });
    });
  }, []);

  useEffect(() => {
    socketMessage &&
      currentConverSation?.members.includes(socketMessage.sender) &&
      setMessages((prev) => [...prev, socketMessage]);
  }, [socketMessage, currentConverSation]);

  useEffect(() => {
    socket.current.emit("addUser", user._id);
    socket.current.on("getUsers", (users) => {
      setOnlineUsers(
        user.following.filter((f) => users.some((u) => u.userId === f))
      );
    });
  }, [user]);

  const receiverId = currentConverSation?.members.find(
    (member) => member !== user._id
  );



  useEffect(() => {
    const getConversation = async () => {
      await axios
        .get("/conversation/" + user._id)
        .then((resp) => setConv(resp.data))
        .catch((err) => console.log(err));
    };
    getConversation();
  }, [user._id]);

  useEffect(() => {
    const getMessage = async () => {
      await axios
        .get("/message/" + currentConverSation?._id)
        .then((resp) => setMessages(resp.data))
        .catch((err) => console.log(err));
    };
    getMessage();
  }, [currentConverSation]);

  useEffect(
    () => scrollRef.current?.scrollIntoView({ behavior: "smooth" }),
    [messages]
  );


  useEffect(()=>{
    const  getChatDetails = async()=>{
      await axios.get('/users/?userId='+receiverId)
      .then(resp => setChatUserDetails(resp.data))
      .catch(err => console.log(err))
    }
    getChatDetails()
    },[receiverId])
 

  const sendMessage = async (e) => {
    e.preventDefault();
    await axios
      .post("/message/", {
        conversationId: currentConverSation._id,
        sender: user._id,
        text: newMessage,
      })
      .then((resp) => setMessages([...messages, resp.data]))
      .catch((err) => console.log(err));
    setNewMessage("");
    socket.current.emit("sendMessage", {
      senderId: user._id,
      receiverId: receiverId,
      text: newMessage,
    });
  };

  return (
    <>
      <NavBar />
      <div className="Chat">
        <div className="chatMenu">
          <div className="chatMenuWrapper">
            <span className="recentConvLabel"> Recent conversations..</span>
            <hr className="labelHr" />
            {conv.map((c, k) => (
              <div onClick={() => setCurrentConverSation(c)}>
                <Conversation conversation={c} currentUser={user} key={k} />
              </div>
            ))}
          </div>
        </div>
        <div className="chatBox">
          <div className="chatBoxWrapper">
            {chatUserDetails ? (
              <>
              <div className="chatWindowDiv"> 
              <img  src={
              chatUserDetails?.profilePicture
                ? PF + chatUserDetails.profilePicture
                : PF + "person/no-avatar.png"}
                className="chatWindowImage"
                alt="currentUserImage"
                />
                <h3 className="chatWindowUser">{chatUserDetails.username}</h3>
              </div>
                <hr />
                <div className="chatBoxTop">
                  {messages.map((message, key) => (
                    <div ref={scrollRef}>
                      <MessageBubble data={message} key={key} />
                    </div>
                  ))}
                </div>
                <div className="chatBoxBottom">
                  <textarea
                    className="chatInputBox"
                    placeholder="Message.."
                    onChange={(e) => setNewMessage(e.target.value)}
                    value={newMessage}
                  />
                  <button className="chatSubmitButton" onClick={sendMessage}>
                    Send
                  </button>
                </div>
              </>
            ) : (
              <span className="noConversation">
                Open a conversation to Chat..
              </span>
            )}
          </div>
        </div>
        <div className="chatOnline">
          <div className="chatOnlineWrapper">
            <span className="chatOnlineLabel">Online Users.</span>
            <hr className="chatOnlineHr" />
            {
              onlineUsers.length === 0?
              <span className="nooneOnlineLabel"> No user is online </span>:
            onlineUsers.map((data, key) => (
              <ChatOnlineUser
                userData={data}
                currentUser={user._id}
                key={key}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Message;
