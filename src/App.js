import { useState } from 'react';
import './App.css';
import Feedback from './components/Feedback';

function App({name,age}) {
  const [counter, setCounter] = useState(0)
  // setTimeout(() => setCounter(counter + 1), 1000)
  const handlePlus = () => {
    setCounter(counter+1)
  }
  console.log(`Rendering ${counter}`)
  return (
    <div>
      <h1> Getting started {name}, your age is {age} </h1>
      <h2>{counter}</h2>
      <button
        onClick={handlePlus}>plus
      </button>
      <Feedback/>
    </div>
  );
}

export default App;
