import { useState, useEffect } from 'react';
import './App.css';

function App() {

  const [count, setCount] = useState(0);
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => setApiData(json))
      
      
  })
  return (
    <div className="App">

      <h3>{count}</h3>
      <button onClick={() => setCount(count + 1)}>click me to count up</button>
      <button onClick={() => setCount(count - 1)}>click me to count down</button>

      <div>{apiData.map(data => (
        <div>
          <h1>{data.name}</h1>
          <p>{data.email}</p>
        
          
        </div>

      ))}</div>
    </div>
  );
}

export default App;
