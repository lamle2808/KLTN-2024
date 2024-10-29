import { useState } from "react";
import { chatData } from "../../lib/venue_data_20";
import "./chat.scss";

export default function Chat() {
  const [selectedUser , setSelectedUser ] = useState(null);

  
  const handleUserSelect = (user) => {
    setSelectedUser (user);
  };
  
  const getLastMessage = (chat) => {
    if (chat.length === 0) return "No messages";
    return chat[chat.length - 1].text;
  };

  return (
    <div className="chat">
      <div className="messages">
        <h1>Messages</h1>
        {chatData.map((item) => (
          <div className="message" key={item.id} onClick={() => handleUserSelect(item)}>
            <div className="info">
              <img src={item.img} alt="" />
              <span>{item.name}</span>
            </div>
            <div>
              <p>{getLastMessage(item.chat)}</p>
            </div>
          </div>
        ))}
      </div>

      {selectedUser && (
        <div className="chatBox">
          <div className="top">
            <div className="user">
              <img
                src={selectedUser.img}
                alt=""
              />
              {selectedUser.name}
            </div>
            <span className="close" onClick={() => setSelectedUser(null)}>
              X
            </span>
          </div>
          <div className="center">
            {selectedUser .chat.map((message) => (
              <div className={`chatMessage ${message.own ? "own" : ""}`} key={message.id}>
                <p>{message.text}</p>
                <span>{message.time}</span>
              </div>
            ))}
          </div>
          <div className="bottom">
            <textarea></textarea>
            <button>Send</button>
          </div>
        </div>
      )}
    </div>
  );
}
