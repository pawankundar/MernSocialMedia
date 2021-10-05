require("./MessageBubble.css");

const MessageBubble = ({own}) => {
  return (
    <div className={own ? "messageBubble own" : "messageBubble"}>
      <div className="bubbleTop">
        <img
          className="chatImage"
          alt="chatImage"
          src="http://localhost:8000/images/person/1.jpg"
        />
        <p className="messageText">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>
      <div className="bubbleBottom">11:11 am</div>
    </div>
  );
};

export default MessageBubble;
