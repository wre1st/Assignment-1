import logo from './logo.svg';
import './App.css';
import { useRef } from 'react';

 

function App() {
  
  const reference = useRef(2);

  const someHandler = () => {
    // Access reference value:
    const value = reference.current;

    // Update reference value:
    reference.current = 56;
  };

 const countRef = useRef(0);
    
    const handle = () => {
      countRef.current++;
      console.log(`Clicked ${countRef.current} times`);
    };
  
    console.log('I rendered!');


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Fetching APIs
        </p>

      </header>
      <button onClick={handle}>Click</button>

    </div>
  );
}

export default App;
