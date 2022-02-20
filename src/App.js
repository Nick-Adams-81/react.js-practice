import { useState, useEffect, useContext, createContext } from 'react';
import './App.css';

function App() {

  const [count, setCount] = useState(0);
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => setApiData(json))
      return () => alert("component is gone!")
         
  }, [])

  const moods = { 
    happy: "happy",
    sad: "sad"
  }

  const MoodEmoji = () => {
    const mood = useContext(MoodContext)
    return <p>{mood}</p>
  }

  const MoodContext = createContext(moods)
  return (
    <div className="App">
      <MoodContext.Provider value={moods.sad}>
        <MoodEmoji />
      </MoodContext.Provider>

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
