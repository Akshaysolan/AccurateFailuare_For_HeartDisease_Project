import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom'; 
import '../css/Register.css'; 

const Register = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    mobileNo: '',
    email: '',
    password: '',
    age: '',
    bloodGroup: '',
    gender: '',
    address: '',
    error: '',
   
  });

  const { firstName, lastName, mobileNo, email, password, age, bloodGroup, gender, address, error } = formData;

  const navigate = useNavigate(); 

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value, error: ''});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!firstName || !lastName || !mobileNo || !email || !password || !age || !bloodGroup || !gender || !address) {
      setFormData({ ...formData, error: 'Please Fill all fields.' });
      return;
    }
  
    try {
      const response = await axios.post('http://localhost:3000/register', formData);
      console.log('Response:', response);
      if (response.data.message === 'User already exists') {
        setFormData({ ...formData, error: 'Email already exists. Please use another email or go to login.'});
      } else {
        setFormData({ ...formData });
        navigate('/login');
        onSubmit(formData);
      }
    } catch (error) {
      console.error(error);
    }
  };
  
  

  return (
    <>
      
      <div className="register-container">
        <h1 style={{padding:'10px'}}>Register</h1>
       
        <form className="register-form" onSubmit={handleSubmit} >
          <input className="register-input" type="text" placeholder="First Name" name="firstName" value={firstName} onChange={handleChange} /><br />
          <input className="register-input" type="text" placeholder="Last Name" name="lastName" value={lastName} onChange={handleChange} /><br />
          <input className="register-input" type="text" placeholder="Mobile No." name="mobileNo" value={mobileNo} onChange={handleChange} /><br />
          <input className="register-input" type="email" placeholder="Email" name="email" value={email} onChange={handleChange} /><br />
          <input className="register-input" type="password" placeholder="Password" name="password" value={password} onChange={handleChange} /><br />
          <input className="register-input" type="number" placeholder="Age" name="age" value={age} onChange={handleChange} /><br />
          <input className="register-input" type="text" placeholder="Blood Group" name="bloodGroup" value={bloodGroup} onChange={handleChange} /><br />
          <input className="register-input" type="text" placeholder="Gender" name="gender" value={gender} onChange={handleChange} /><br />
          <textarea className="register-input" placeholder="Address" name="address" value={address} onChange={handleChange}></textarea><br />
          <div className="error-message" >{error}</div>
          <button className="register-button" type="submit">Register</button>
        </form>
        
      </div>
       
    </>
  );
};

export default Register;
