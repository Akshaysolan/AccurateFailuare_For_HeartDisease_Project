import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import '../css/Login.css'; 

const Login = ({ setIsLoggedIn }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    error: ''
  });

  const navigate = useNavigate();

  const { email, password, error } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value, error: '' });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/login', formData);
      if (response && response.data) {
        console.log(response.data);
        localStorage.setItem('token', response.data.token);
        alert('Login successful');
       
        navigate('/heart');
        setIsLoggedIn(true); 
      } else {
        console.error('Invalid response:', response);
        setFormData({ ...formData, error: 'Invalid response from server' });
      }
    } catch (error) {
      console.error('Error:', error);
      setFormData({ ...formData, error: 'Error logging in. Please try again.' });
    }
  };
  

  return (
    <>
      
      <div className="login-container">
        <h1 style={{textAlign:"center"}}>Login</h1>
        <form className="login-form" onSubmit={handleSubmit}>
          <input className="login-input" type="email" placeholder="Email" name="email" value={email} onChange={handleChange} /><br />
          <input className="login-input" type="password" placeholder="Password" name="password" value={password} onChange={handleChange} /><br />
          <button className="login-button" type="submit">Login</button>
          <Link to="/register" className='sign-up-button'>SignUP</Link>
          {error && <p className="login-error" style={{color:"balck"}}>{error}</p>}
        </form>
       
      </div>
      
    </>
  );
};

export default Login;
