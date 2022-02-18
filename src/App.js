import { useState, useEffect }  from 'react';
import './App.css';

function App() {

  const [count, setCount] = useState(0);
  return (
    <div className="App">
      
      <h3>{count}</h3>
      <button onClick={() => setCount(count + 1)}>click me to count up</button>
      <button onClick={() => setCount(count - 1)}>click me to count down</button>
    </div>
  );
}

export default App;
