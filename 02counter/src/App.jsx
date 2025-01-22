import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
   let [counter,setCounter]=useState(15);
  const addValue=()=>{
  
    console.log("value added ",counter);
    setCounter(counter+1);
    setCounter(counter+1);
    setCounter(counter+1);
    setCounter(counter+1);
  }

  const RemoveValue=()=>{
    if(counter==0){
      setCounter(0);
    }
    else{
    setCounter(counter-1);
    }
  }
 
  return (
    <>
    <h1>chai aur react</h1>
    <h2>Couter value:5</h2>
    <button onClick={addValue}>Add value{counter}</button>
    <br />
    <button onClick={RemoveValue}>remove value{counter}</button>
    </>
  )
}

export default App
