import "./signup.scss";
import {register} from '../../api/auth';
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup() { 
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    userName: '',
    phone: '',
    email: '',
    password: '',
    confirmPassword: '',
  });


  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;      
    }

    try {
      console.log(formData)
      const response = await register(formData);
      console.log('Đăng ký thành công:', response);
      setSuccess(response);
      alert('Register successfully');
      navigate('/login');

    } catch (err) {
      console.error('Lỗi khi đăng ký:', err.message);
      setError(err.message);
    }
  };

  return (
    <div className="signup">
      <div className="inputContainer">
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" name="userName" placeholder="Username" onChange={handleChange} />
          <input type="text" name="phone" placeholder="Phone" onChange={handleChange}/>
          <input type="email" name="email" placeholder="Email" onChange={handleChange}/>
          <input type="password" name="password" placeholder="Password" onChange={handleChange}/>
          <input type="password" name="confirmPassword" placeholder="Confirm Password" onChange={handleChange}/>
          <button>
           Sign Up
          </button>
        </form>

        {error && <p className="error">{error}</p>}
        {success && <p className="success">{success}</p>}
        <span>
          Already have an account? <a href="/login">Sign In</a>
        </span>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  );
}
