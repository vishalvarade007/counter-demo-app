import React,{useState} from "react";
import './App.css';

function App() {
  const [counter, setCounter] =  useState(0);

  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  const decrementCounter = () => {
    setCounter(counter - 1);
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1>Simple React Counter</h1>
        <p>Current Count: {counter}</p>
        <button onClick={incrementCounter}>Increment</button>
        <button onClick={decrementCounter}>Decrement</button>
      </header>
    </div>
  );
}

export default App;
