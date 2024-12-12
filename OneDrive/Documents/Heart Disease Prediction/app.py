#r'C:\Users\prera\OneDrive\Documents\models\heart_disease_model.pkl'
import joblib
import numpy as np
from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

# Load the trained model
model = joblib.load(r'C:\Users\prera\OneDrive\Documents\models\heart_disease_model.pkl')

@app.route('/')
def home():
    return render_template('index.html')  # Make sure 'index.html' is in the 'templates' folder

@app.route('/predict', methods=['POST'])
def predict():
    try:
        # Get the JSON data sent from the frontend
        data = request.get_json()

        # Ensure that 'features' is in the data and has the right number of elements
        if 'features' not in data or len(data['features']) != 13:
            return jsonify({'error': 'Input data should have 13 features'}), 400

        # Convert the features into a numpy array and ensure they are numeric
        features = np.array(data['features'], dtype=float)

        # Perform the prediction
        prediction = model.predict([features])[0]

        # Return the prediction result (1 = Heart Disease, 0 = No Heart Disease)
        return jsonify({'prediction': prediction})

    except Exception as e:
        # Handle errors gracefully
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)

