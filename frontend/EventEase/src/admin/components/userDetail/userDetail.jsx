import PropTypes from "prop-types";
import "./userDetail.scss";

export default function UserDetail({ user }) {
  return (
    <div className="userDetail">
      <h2>User Details</h2>
      <div className="info">
      <img src={user.img} alt={user.name} className="avatar" />
      <h3>{user.name}</h3>
      <p>Email: {user.email}</p>
      <p>Password: {user.password}</p> 
      <div className="actions">
        <button className="blockBtn" >Block</button>
        <button className="resetPasswordBtn">Reset Password</button>
      </div>
      </div>
    </div>
  );
}

UserDetail.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    name: PropTypes.string,
    img: PropTypes.string,
    email: PropTypes.string,
    password: PropTypes.string,
  }).isRequired,
};
