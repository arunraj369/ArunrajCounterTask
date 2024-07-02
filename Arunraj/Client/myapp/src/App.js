import React, { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const handleIncreamnet = () => {
    setCount(count + 1);
  };
  const handleDecrement = () => {
    setCount(count - 1);
  };
  return (
    <div className="App">
      <h1>Counter :{count}</h1>
      <button onClick={handleIncreamnet}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
}

export default App;
