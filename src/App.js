import React, { useState } from 'react';
import './App.css';

function App() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBMI] = useState('');

  const calculateBMI = () => {
    if (weight > 0 && height > 0) {
      const heightInMeters = height / 100; // Convert height to meters
      const calculatedBMI = (weight / (heightInMeters * heightInMeters)).toFixed(2);
      setBMI(calculatedBMI);
    }
  };

  return (
    <div className="App">
      <h1>BMI Calculator</h1>
      <div>
        <label>Weight (kg): </label>
        <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} />
      </div>
      <div>
        <label>Height (cm): </label>
        <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} />
      </div>
      <button onClick={calculateBMI}>Calculate BMI</button>
      {bmi && <p>Your BMI: {bmi}</p>}
    </div>
  );
}

export default App;
