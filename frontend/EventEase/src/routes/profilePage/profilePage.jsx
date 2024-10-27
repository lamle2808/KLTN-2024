import Chat from '../../components/chat/Chat'
import List from '../../components/list/List'
import './profilePage.scss'


export default function profilePage() {
  return (
    <div className='profilePage'>
    <div className="details">
        <div className="wrapper">
            <div className="title">
                <h1>User Information</h1>
                <button>Update Profile</button>
            </div>
            <div className="info">
                <span>Avartar:
                <img src="https://images.pexels.com/photos/13969614/pexels-photo-13969614.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" />
                </span>
                <span>Name: <b>John Doe</b></span>
                <span>E-mail: <b>john@gmai.com</b></span>
            </div>
            <div className="title">
                <h1>My List</h1>
                <button>Create New Post</button>
            </div>
                <List />
            <div className="title">
                <h1>Save List</h1>
            </div>
                <List />
        </div>
    </div>
    <div className="chatContainer">
        <div className="wrapper">
            <Chat />
        </div>
    </div>
    </div>
  )
}
