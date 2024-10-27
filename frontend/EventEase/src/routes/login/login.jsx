import { login } from "../../api/auth";
import { useNavigate } from 'react-router-dom';
import './login.scss';
import {loginSuccess} from '../../redux/reducer';
import { useState } from 'react';
export default function Login() {

  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(formData)
      const response = await login(formData);
      console.log('Đăng nhập thành công:', response.data);
      localStorage.setItem('token', response.data.token);

      navigate('/');
    } catch (err) {
      console.error('Lỗi khi đăng nhập:', err.message);
    }
  };

  return (
    <div className='login'>
        <div className="inputContainer">
          <h1>Sign In</h1>
          <form onSubmit={handleSubmit}>
            <input type="email" name='email' placeholder='Email' onChange={handleChange}/>
            <input type="password" name='password' placeholder='Password' onChange={handleChange}/>
            <button>Sign In</button>    
          </form>
          <span>Don not have an account? <a href="/signup">Sign Up</a></span>
        </div>
        <div className="imgContainer">
          <img src='/bg.png' alt=''/>
        </div>
    </div>
  )
}
