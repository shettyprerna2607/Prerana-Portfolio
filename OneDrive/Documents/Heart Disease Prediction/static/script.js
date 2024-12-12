document.getElementById('predictionForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get input values
    let features = [
        document.getElementById('age').value,
        document.getElementById('sex').value,
        document.getElementById('cp').value,
        document.getElementById('trestbps').value,
        document.getElementById('chol').value,
        document.getElementById('fbs').value,
        document.getElementById('restecg').value,
        document.getElementById('thalach').value,
        document.getElementById('exang').value,
        document.getElementById('oldpeak').value,
        document.getElementById('slope').value,
        document.getElementById('ca').value,
        document.getElementById('thal').value
    ];

    // Send the data to the Flask backend
    fetch('/predict', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ features: features })
    })
    .then(response => response.json())
    .then(data => {
        // Display the result
        document.getElementById('result').innerHTML = `Prediction: ${data.prediction == 1 ? "Heart Disease Detected" : "No Heart Disease"}`;
    })
    .catch(error => {
        console.error('Error:', error);
    });
});
