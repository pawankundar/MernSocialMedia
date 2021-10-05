require('./Conversation.css')

const Conversation = ()=>{
    return (
        <div className="messageChats">
            <img className="messageImage" alt="userImage" src="http://localhost:8000/images/person/1.jpg"/>
            <span className="messageUsername">Pawan Kundar</span>
        </div>
    )
}

export default Conversation