from flask import Flask, request, jsonify
from flask_cors import CORS 
import pickle
import os

# Get the directory path of the current script
current_dir = os.path.dirname(os.path.abspath(__file__))
model_file_path = os.path.join(current_dir, 'heart_failure_models.pkl')

# Load models
try:
    with open(model_file_path, 'rb') as file:
        models = pickle.load(file)
    print("Models loaded successfully.")
except FileNotFoundError:
    print(f"Error: The file '{model_file_path}' could not be found.")
except Exception as e:
    print("An error occurred while loading the models:", e)

# Create a Flask application
app = Flask(__name__)
CORS(app)

# Define a route for '/analysis' that accepts JSON data
@app.route('/analysis', methods=['POST'])
def analyze_data():
    data = request.json  # Get JSON data from the request
    
    # Extract features from the JSON data
    age = data.get('age')
    anaemia = data.get('anaemia')
    creatinine_phosphokinase = data.get('creatinine_phosphokinase')
    diabetes = data.get('diabetes')
    ejection_fraction = data.get('ejection_fraction')
    high_blood_pressure = data.get('high_blood_pressure')
    platelets = data.get('platelets')
    serum_creatinine = data.get('serum_creatinine')
    serum_sodium = data.get('serum_sodium')
    
    # Perform prediction using the models
    results = {}
    for name, model in models.items():
        pred = model.predict([[age, anaemia, creatinine_phosphokinase, diabetes, 
                               ejection_fraction, high_blood_pressure, 
                               platelets, serum_creatinine, serum_sodium]])
        result = "There is a probability that the person may have heart disease" if pred == 1 else "There is a probability that the person may not have heart disease"
        results[name] = result

    # Return the results in JSON format
    return jsonify(results)

# Define a route for '/about'
@app.route('/about')
def about():
    return 'This is a simple Flask web application.'

# Run the app on port 5000
if __name__ == '__main__':
    app.run(debug=True, port=5000)

