import {
  useState,
  useEffect,
  useContext,
  createContext,
  useRef
} from 'react';
import './App.css';

function App() {

  
  const [count, setCount] = useState(0); // setting initial state of count to 0
  const [apiData, setApiData] = useState([]); // setting initial state of apiData to an empty array so we can map the data in the JSX

  // useRef hook 
  const myBtn = useRef(null)
  const clickIt = () => myBtn.current.click()

  // useEffect takes the place of the 3 life cycle methods in class components(componentDidMount, componentDidUpdate, componentWillUnmount)
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => setApiData(json))
    return () => alert("component is gone!")

  }, [])

  // creating a variable for testing with useContext
  const moods = {
    happy: "happy",
    sad: "sad"
  }

    // using createContext to use inside useContext
  const MoodContext = createContext(moods)

  // creating a method to return JSX with current mood
  const MoodEmoji = () => {
    const mood = useContext(MoodContext)
    return <p>{mood}</p>
  }


  return (
    <div className="App">
      <MoodContext.Provider value={moods.happy}>
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

      <button ref={myBtn}>click me</button>
    </div>
  );
}

export default App;
