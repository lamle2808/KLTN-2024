import PropTypes from "prop-types";
import './userCard.scss'
export default function UserCard({item}) {
  return (
    <div className="userCard">
    <div className="avatar">
      <img src= {item.img} alt="" />
    </div>
    <div className="info">      
      <h4>{item.name}</h4>
      <span>{item.email}</span>  
      <input type="password" value={item.password}/>
    </div>      
    </div>
  )
}

UserCard.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    name: PropTypes.string,
    img: PropTypes.string,
    email: PropTypes.string,
    password: PropTypes.string,
  }).isRequired,
};
