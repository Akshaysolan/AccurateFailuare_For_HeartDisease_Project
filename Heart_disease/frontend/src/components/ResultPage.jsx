import React from 'react';
import { useNavigate } from 'react-router-dom';
import jsPDF from 'jspdf';
import '../css/Resultpage.css'

function ResultPage() {
  const urlParams = new URLSearchParams(window.location.search);

  const inputDataParam = urlParams.get('inputData');
  const death = urlParams.get('death');
  const prediction = urlParams.get('prediction');
  let inputData = {};
  if (inputDataParam) {
    try {
      inputData = JSON.parse(decodeURIComponent(inputDataParam));
    } catch (error) {
      console.error('Error parsing input data:', error);
    }
  }

  const navigate = useNavigate();

  const handleBack = () => {
    const choice = window.confirm('Where do you want to go?');
    if (choice) {
      navigate('/heart');
    } else {
      navigate('/');
    }
  };


  
const handlePrint = () => {
  const pdf = new jsPDF();
  let yPos = 10; 
 

  pdf.setFontSize(14);
  pdf.text("User Input Data:", 10, yPos);
  yPos += 10; 

  
  Object.entries(inputData).forEach(([key, value]) => {
    pdf.setFontSize(12);
    pdf.text(`${key}: ${value}`, 10, yPos);
    yPos += 10; 
  });

  yPos += 10; 

  
  pdf.setFontSize(14);
  pdf.text("Prediction Result:", 10, yPos);
  yPos += 10; 

 
  prediction.split('\n').forEach((line) => {
    pdf.setFontSize(12);
    pdf.text(line, 10, yPos);
    yPos += 10; 
  });

 
  pdf.save('prediction_result.pdf');
};



  return (
    <div className="result-container">
      <h2>User Input Data:</h2>
      <div className="user-data-container">

        <ul className='userData-form'>
            {Object.entries(inputData).map(([key, value]) => (
                
                <li key={key}><span className="userData-key">{key}:
                </span> <span className="userData-value">{value}</span></li>
            ))}
            <li><span className="userData-key">Death Event:</span> 
            <span className="userData-value">{death}</span></li>

        </ul>

      </div>
      <h1 style={{textAlign:'center'}}>Prediction Result</h1>
      {prediction && prediction.split('\n').map((line, index) => (
        <p key={index}>
          
          {line.includes(':') ? (
            <>
              <span className="classifier">{line.split(':')[0]}:</span>
              <span className="prediction" style={{ color: ' rgb(99, 236, 220)' }}>{line.split(':')[1]}</span>
            </>
            
          ) : (
            <span className="prediction" style={{ color: ' rgb(99, 236, 220)' }}>{line}</span>
          )}
        </p>
      ))}
      <div className="button-container">
        <button className="ar" onClick={handleBack}>Back</button>
        <button onClick={handlePrint}>Print PDF</button>
      </div>
    </div>
  );
}

export default ResultPage;
