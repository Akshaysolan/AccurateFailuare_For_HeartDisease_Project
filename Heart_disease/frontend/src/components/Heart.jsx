import React from 'react';
import { Link } from 'react-router-dom';
 import '../css/Heart.css';
import downloadImage from '../images/images.jpeg'; 
import prevetionImage from '../images/prevetion.jpeg'; 
import Image from '../images/image.jpeg'; 

const HeartDiseasePage = () => {
  return (
    <> 
    <div>
      <header className="header">
        <nav className="nav">
          
          <h1>Accurate prediction for heart disease</h1>
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">AboutUs</Link></li> 
            <li><Link to="/heart">Form</Link></li>
             
          </ul>
        </nav>
      </header>
      </div>
    <div className="heart-disease-page">

      <section className="section">
        <h2 className="section-title">Symptoms of Heart Disease:</h2>
        <div className="content-container">
          <ul className="list">
            <li className="list-item">Chest Pain or Discomfort: This is one of the most common symptoms of heart disease. It may feel like pressure, tightness, or a squeezing sensation in the chest.</li>
            <li className="list-item">Shortness of Breath: Feeling breathless even during rest or mild physical activity can be a sign of heart disease.</li>
            <li className="list-item">Fatigue: Unexplained fatigue or weakness, especially if it's accompanied by other symptoms, could indicate heart problems.</li>
            <li className="list-item">Swelling: Swelling in the legs, ankles, feet, or abdomen can occur due to fluid retention, which may be a sign of heart failure.</li>
            <li className="list-item">Irregular Heartbeat: Arrhythmias can cause the heart to beat too fast, too slow, or irregularly. This may result in palpitations or a fluttering sensation in the chest.</li>
            <li className="list-item">Dizziness or Lightheadedness: Feeling dizzy or fainting could be a symptom of inadequate blood flow to the brain.</li>
          </ul>
          <img src={downloadImage} alt="Heart" className="image1" />
        </div>
      </section>
      <hr/>
      <section className="section">s
        <h2 className="section-title">Prevention of Heart Disease:</h2>
        <div className="content-container">
        <img src={prevetionImage} alt="Heart" className="image" />
          <ul className="list">
            <li className="list-item">Healthy Diet: Eat a balanced diet rich in fruits, vegetables, whole grains, lean proteins, and healthy fats. <span className="highlight">Limit intake of saturated fats, trans fats, cholesterol, sodium, and added sugars.</span></li>
            <li className="list-item">Regular Exercise: Aim for at least 150 minutes of moderate-intensity aerobic activity or 75 minutes of vigorous-intensity activity per week, along with muscle-strengthening exercises on two or more days per week.</li>
            <li className="list-item">Maintain a Healthy Weight: Being overweight or obese increases the risk of heart disease. <span className="highlight">Maintain a healthy weight through a combination of diet and exercise.</span></li>
            <li className="list-item">Quit Smoking: Smoking damages the blood vessels and can lead to atherosclerosis, increasing the risk of heart disease. <span className="highlight">Quitting smoking can significantly reduce this risk.</span></li>
            <li className="list-item">Limit Alcohol Consumption: Excessive alcohol consumption can raise blood pressure and contribute to heart disease. <span className="highlight">Limit alcohol intake to moderate levels.</span></li>
            <li className="list-item">Manage Stress: Chronic stress can contribute to high blood pressure and other risk factors for heart disease. <span className="highlight">Practice relaxation techniques, such as deep breathing, meditation, or yoga, to manage stress.</span></li>
            <li className="list-item">Regular Health Check-ups: Regular medical check-ups can help identify risk factors for heart disease early on and allow for timely intervention.</li>
          </ul>
        </div>
      </section>
      <hr/>
      <section className="section">
        <h2 className="section-title">Actions to Take if Heart Disease is Suspected:</h2>
        <div className="content-container">
          <ul className="list">
              <li className="list-item">Seek Medical Attention: If you experience symptoms of heart disease, such as chest pain, shortness of breath, or palpitations, seek medical attention immediately. <span className="highlight">Don't ignore these symptoms or delay seeking help.</span></li>
              <li className="list-item">Follow Doctor's Recommendations: If diagnosed with heart disease, follow your doctor's recommendations regarding treatment, medication, lifestyle changes, and regular monitoring.</li>
              <li className="list-item">Medication Adherence: Take prescribed medications as directed by your doctor. This may include medications to control blood pressure, cholesterol, or manage other risk factors.</li>
              <li className="list-item">Lifestyle Modifications: Make necessary lifestyle modifications, such as adopting a heart-healthy diet, exercising regularly, quitting smoking, and managing stress.</li>
              <li className="list-item">Attend Cardiac Rehabilitation: If recommended by your doctor, consider participating in a cardiac rehabilitation program, which provides education, exercise training, and emotional support to help you recover from heart disease and improve your quality of life.</li>
          </ul>
          <img src={Image} alt="Heart" className="image" />
        </div>
      </section>
      <hr/>
    </div>
    <footer className="footer">
      <p>&copy; 2024 Your Website</p>
    </footer>
    </>
  );
};

export default HeartDiseasePage;
