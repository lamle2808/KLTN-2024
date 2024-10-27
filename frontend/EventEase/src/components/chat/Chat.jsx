import { useState } from 'react'
import { chatData } from '../../lib/venue_data_20'
import './chat.scss'


export default function Chat() {
    const [chat, setChat] = useState(null);
  
    return (
      <div className='chat'>
        <div className="messages">
          <h1>Messages</h1>
          {chatData.map((item) => (
            <div className="message" key={item.id} onClick={() => setChat(true)}>
              <img src={item.img} alt="" />
              <span>{item.name}</span>
              <p>{item.lastMessage}</p>
            </div>
          ))}
        </div>
        
        {chat && (
          <div className="chatBox">
            <div className="top">
              <div className="user">
                <img src="https://images.pexels.com/photos/13969614/pexels-photo-13969614.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" />
                John Doe
              </div>
              <span className='close' onClick={() => setChat(null)}>X</span>
            </div>
            <div className="center">
              <div className="chatMessage own">
                <p>Hi, how are you?</p>
                <span>12:00</span>
              </div>
              <div className="chatMessage">
                <p>Hello, I am fine</p>
                <span>12:01</span>
              </div>
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
