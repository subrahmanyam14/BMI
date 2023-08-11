import React,{useState} from 'react';
import './Styles.css';

function Design() {
    const [hV, setHeightValue] = useState('');
    const [wV, setWeightValue] = useState('');
    const [bmiValue, setBmiValue] = useState('');
    const [bmiMessage, setBmiMessage] = useState('');
  
    const calculateBmi = () => {
        if (hV && wV) {
            const heightInMeters = hV / 100;
            const bmi = (wV / (heightInMeters * heightInMeters)).toFixed(2);
            
            setBmiValue(bmi);
  
            let message = '';
           
            if (bmi < 18.5)
             {
                message = 'You Are Underweight...';
             }else if (bmi >= 18.5 && bmi <= 25) {
                message = 'You Are Normal Weight...';
            } else if (bmi >= 25 && bmi <= 30) {
                message = 'You Are Overweight...';
            } else {
                message = 'You Are Obese..!';
            }
            setBmiMessage(message);
        } else {
            setBmiValue('');
            setBmiMessage('');
        }
    

    };
  

  return (
    <div className="Main">
         <h1> BMI Calculator</h1>
        <div className="container">
           
            <div className="input-container">
                <label htmlFor="height">Enter Your Height (cm):</label>
                <input
                    type="number"
                    id="height"
                    value={hV}
                    onChange={(e) => setHeightValue(e.target.value)}
                />
            </div>
            <div className="input-container1">
                <label htmlFor="weight">Enter Your Weight (kg):</label>
                <input
                    type="number"
                    id="weight"
                    value={wV}
                    onChange={(e) => setWeightValue(e.target.value)}
                />
            </div>
            <button className="calculate-btn" onClick={calculateBmi}>
                click to calculate Body-Mass-Index(BMI)
            </button>
            {bmiValue && bmiMessage && (
                <div className="result">
                    <p>
                        Your BMI Index: <span className="bmi-value">{bmiValue}</span>
                    </p>
                    <p>
                        Result: <span className="bmi-message">{bmiMessage}</span>
                    </p>
                </div>
            )}
        </div>
        </div>
  );
}

export default Design;