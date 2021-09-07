import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState} from "react"


let count=1;


function App() {

  // increment starts from the zero value,
const [count, setCount]=useState(0);
  console.log(count);

  
const IncrementValue=()=>{
  // increasing the values
  setCount(count+1)
  //console.log('Button Pressed'+count)
}


function changeColor(){
  this.setState({black: !this.state.black});
  this.changeColor.bind(this);
}
 



const [random, setRandom]=useState(Math.random());
const [mounted, setMounted]=useState(true);
const RenderIt= () =>{
  setRandom(Math.random())
} 

const t =()=>{
  setMounted(!mounted)

}

return (
    <div className="App">
      <header className="App-header">
        <p>
        React Hook- use effect assignment
        </p>
       <p>{count}</p>
        <button  onClick={IncrementValue}>Click</button>
        <p>
        {mounted && <LifeCycle/>}
        </p>
        <button onClick={RenderIt}>Re-render</button>
        <button onClick={t}>Show/Hide LifecycleDemo</button>
        <p></p>

      </header>

    </div>
  );
}

function LifeCycle() {
  // Pass useEffect a function
  useEffect(() => {
    // This gets called after every render, by default
    // (the first one, and every one after that)
    console.log('render!');
    // If you want to implement componentWillUnmount,
    // return a function from here, and React will call
    // it prior to unmounting.
    return () => console.log('unmounting...');
  })

  return "Life Cycle returned";
}

export default App;
