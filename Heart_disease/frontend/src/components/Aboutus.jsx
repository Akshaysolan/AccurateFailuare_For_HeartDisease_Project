import React from 'react';
import { Link } from 'react-router-dom';
import '../css/About.css';

function AboutUs() {
  return (
    
    <div>
      <div>
      <header className="header">
        <nav className="nav">
          
          <h1>Accurate prediction for heart disease</h1>
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/heart2">CareHeart</Link></li> 
            <li><Link to="/heart">Form</Link></li>
             
          </ul>
        </nav>
      </header>
      

  
    </div>
       
      <div className="about-us-container">
        <h1>About Us</h1>
        <p>
          Welcome to our Heart Disease Prediction project! Our team is dedicated to providing accurate predictions for heart disease using machine learning algorithms and data analysis techniques.
        </p>
        <p>
          Our goal is to empower individuals with valuable insights into their heart health, allowing them to take proactive measures to prevent or manage heart disease.
        </p>
        <hr/>
        <h2>Meet the Team</h2>
        <div className="team-members">
          <div className="team-member">
            <h3>Pranav More</h3>
            <p>Lead Data Scientist</p>
          </div>
          <div className="team-member">
            <h3>Aniket Akshinge</h3>
            <p>Lead Machine Learning</p>
          </div>
          <div className="team-member">
            <h3>Akshay Solanke</h3>
            <p>Software Developer</p>
          </div>
        </div>
        <hr/>
        <h2>Contact Us</h2>
        <p>If you have any questions or feedback about our project, feel free to reach out to us:</p>
        <ul>
          <li>Email: contact@heartdiseaseprediction.com</li>
          <li>Phone: 123-456-7890</li>
        </ul>
      
      </div>
      <footer className="footer">
        <p>&copy; 2024 Your Website</p>
    </footer>
    </div>
  );
}

export default AboutUs;
