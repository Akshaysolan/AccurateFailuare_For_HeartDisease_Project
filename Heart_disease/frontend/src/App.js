import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Heart from './components/Heart';
import Home from './components/Home';

import HeartFailurePrediction from './components/HeartFailurePrediction'; 
import ResultPage from './components/ResultPage';

import './App.css';
import Aboutus from './components/Aboutus';

const App = () => {
  const [formData, setFormData] = useState(null); 
  const [registrationData, setRegistrationData] = useState(null); 
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  

  const [isSidebarVisible, setIsSidebarVisible] = useState(true);
  
    const toggleSidebar = () => {
      setIsSidebarVisible(!isSidebarVisible);
    }
    
  const handleFormSubmit = (data) => {
    setFormData(data);
  };
  

  const handleRegistrationSubmit = (data) => {
    setRegistrationData(data);
  };

  return (
    <BrowserRouter>
      <div >
        
      
          <Routes>
            <Route path="/" element={<Home isLoggedIn={isLoggedIn}/>} />
            <Route exact path="/register" element={<Register onSubmit={handleRegistrationSubmit} />} />
            <Route path="/login" element={<Login />} />
            <Route path="/heart2" element={<Heart />} />
            <Route path="/about" element={<Aboutus/>} />
            <Route path="/heart" element={<HeartFailurePrediction />} /> 
            <Route path="/" element={<HeartFailurePrediction />} />
            <Route path="/result" element={<ResultPage />} />
          </Routes>
        </div>
        
      
          
    </BrowserRouter>
  );
};

export default App;
