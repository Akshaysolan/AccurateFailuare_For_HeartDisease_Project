import React, { useState } from 'react';
import '../css/style.css'; 
import { useNavigate, Link} from 'react-router-dom';

function HeartFailurePrediction() {
  const [result, setResult] = useState('');
  const [error, setError] = useState(null);
  const [inputData, setInputData] = useState({
    age: '',
    anaemia: '',
    creatinine_phosphokinase: '',
    diabetes: '',
    ejection_fraction: '',
    high_blood_pressure: '',
    platelets: '',
    serum_creatinine: '',
    serum_sodium: '',
  });
  

  const navigate = useNavigate();


  const handleChange = (e) => {
    setInputData({
      ...inputData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    const data = {
      age: parseInt(inputData.age),
      anaemia: parseInt(inputData.anaemia),
      creatinine_phosphokinase: parseInt(inputData.creatinine_phosphokinase),
      diabetes: parseInt(inputData.diabetes),
      ejection_fraction: parseInt(inputData.ejection_fraction),
      high_blood_pressure: parseInt(inputData.high_blood_pressure),
      platelets: parseInt(inputData.platelets),
      serum_creatinine: parseInt(inputData.serum_creatinine),
      serum_sodium: parseInt(inputData.serum_sodium),
      sex:parseInt(inputData.sex),
      time:parseInt(inputData.time)
    };

    fetch('http://localhost:5000/analysis', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      
      const countHeartDisease = Object.values(data).filter(prediction => prediction === 'There is a probability that the person may have heart disease').length;
      const isHeartDisease = countHeartDisease >= 5;
      const death = isHeartDisease ? 1 : 0;

    const resultText = isHeartDisease ? 'There is a probability that the person may have heart failure' : 'There is a probability that the person may not have heart failure';
    
    setInputData({
      ...inputData,
      death: death
    });
    setResult(resultText);
    navigate(`/result?inputData=${encodeURIComponent(JSON.stringify(inputData))}&prediction=${encodeURIComponent(resultText)}&death=${death}`);

   })
    .catch(error => {
      console.error('Error:', error);
      setError(error.message); 
    });
  };


  
  window.history.forward();
  const handleLogout = () => {
    window.history.forward();
    navigate('/');
  };



  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  return (
    <div className='con' style={{ display: 'flex', flexDirection: 'row' }}>
       <div>
      <header className="header">
        <nav className="nav">
          
          <h1>Accurate prediction for heart disease</h1>
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">AboutUs</Link></li> 
            <li><Link to="/heart2">CareHeart</Link></li> 
            <li><Link to="/" onClick={handleLogout}>logout</Link></li>
             
          </ul>
        </nav>
      </header>
      </div>
      <div className='con67'>
        <h1 className="title" style={{textAlign:"center"}}>Heart Failure Prediction</h1>
        <div className="container67">
          
          <div className="inputGroup">
            <label className="label4">Age:</label>
            <input type="number" name="age" value={inputData.age} onChange={handleChange} className="inputField"/>
          </div>
          <div className="inputGroup">
            <label className="label4">Anaemia:</label>
            <input type="number" name="anaemia" value={inputData.anaemia} onChange={handleChange} className="inputField" />
          </div>
          <div className="inputGroup">
            <label className="label4">Creatinine Phosphokinase:</label>
            <input type="number" name="creatinine_phosphokinase" value={inputData.creatinine_phosphokinase} onChange={handleChange} className="inputField" />
          </div>
          <div className="inputGroup">
            <label className="label4">Diabetes:</label>
            <input type="number" name="diabetes" value={inputData.diabetes} onChange={handleChange} className="inputField"/>
          </div>
          <div className="inputGroup">
            <label className="label4">Ejection Fraction:</label>
            <input type="number" name="ejection_fraction" value={inputData.ejection_fraction} onChange={handleChange} className="inputField"/>
          </div>
          <div className="inputGroup">
            <label className="label4">High Blood Pressure:</label>
            <input type="number" name="high_blood_pressure" value={inputData.high_blood_pressure} onChange={handleChange} className="inputField"/>
          </div>
          <div className="inputGroup">
            <label className="label4">Platelets:</label>
            <input type="number" name="platelets" value={inputData.platelets} onChange={handleChange} className="inputField"/>
          </div>
          <div className="inputGroup">
            <label className="label4">Serum Creatinine:</label>
            <input type="number" name="serum_creatinine" value={inputData.serum_creatinine} onChange={handleChange} className="inputField" />
          </div>
          <div className="inputGroup">
            <label className="label4">Serum Sodium:</label>
            <input type="number" name="serum_sodium" value={inputData.serum_sodium} onChange={handleChange} className="inputField"/>
          </div>
          <div className="inputGroup">
            <label className="label4">Sex:(male=1, female=0)</label>
            <input type="number" name="sex" value={inputData.sex} onChange={handleChange} className="inputField"/>
          </div>
          <div className="inputGroup">
            <label className="label4">Time:</label>
            <input type="number" name="time" value={inputData.time} onChange={handleChange} className="inputField"/>
          </div>
          <div className="inputGroup">
            <label className="label4">DeathEvent</label>
            <input type="number" name="death" value={inputData.death} onChange={handleChange} className="inputField" placeholder='0' readOnly/>
          </div>
          <button onClick={handleSubmit} className="button4" >Predict</button>
          <p className="output">{result}</p>
        </div>
        
      </div>
      <footer className="footer">
      <p>&copy; 2024 Your Website</p>
    </footer>
    </div>
  );
}

export default HeartFailurePrediction;
