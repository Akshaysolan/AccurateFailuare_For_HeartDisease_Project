import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';



const Header = ({ toggleSidebar, isSidebarVisible }) => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [logoutMessage, setLogoutMessage] = useState('');

 

  return (
    <div>
      <header className="header">
        <nav className="nav">
          
          <h1>Accurate prediction for heart disease</h1>
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">AboutUs</Link></li> 
            <li><Link to="/login">SignIn</Link></li>
             
          </ul>
        </nav>
      </header>
      

  
    </div>
  );
};

export default Header;
