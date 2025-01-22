import { useState,useCallback,useEffect } from 'react'
import reactLogo from './assets/react.svg'




function App() {
  const [length, setLength] = useState(8);
  const[numberAllowed,setNumberAllowed]=useState(false);
  const[charAllowed,setCharAllowed]=useState(false);
  const[password,setPassword]=useState("");

  const passwordGenerator=useCallback(()=>{
    let pass="";
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numberAllowed) {str+="0123456789"}
    if(charAllowed) str+="/@#$%^&*()_+"

    for (let i = 0; i <length; i++) {
      let char=Math.floor(Math.random()*str.length+1)

      pass+=str.charAt(char);
      
    }
     setPassword(pass);

  },[length,numberAllowed,charAllowed,setPassword])


  useEffect(()=>{passwordGenerator()},[length,numberAllowed,charAllowed,passwordGenerator])
  return (
    <>
    <div className='w-full max-w-md shadow-md  mx-auto rounded-lg px-4  py-3 my-8 text-orange-400 bg-gray-400'>
      <h1 className='flex  justify-center shadow rounded-lg overflow-hidden mb-4 text-black' >Password generator</h1>
      <div className=' flex shadow rounded-lg overflow-hidden mb-4'>
        <input type="text"
        value={password}
        className='outline-none w-full py-1 px-3 bg-orange-50'
        placeholder='password'
        readOnly
        />
        <button className='outline-none bg-blue-100 px-3 py-2 shrink-0 text-green-500'>copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='=flex items-center gap-x-1'>
          <input 
          type="range"
          min={8}
          max={100}
          value={length}

          className='cursor-pointer'
          onChange={(e)=>{setLength(e.target.value)}}
          />
          <label className='text-black'>Length:{length}</label>
          
        </div>
        <div className="flex items-center gap-x-1">
          <input
          type="checkbox"
          defaultChecked={numberAllowed}
          id="numberInput"
          onChange={()=>{setNumberAllowed((prev=>!prev))}}
          />
          <label htmlFor="numberInput">Numbers</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
          type="checkbox"
          defaultChecked={charAllowed}
          id="characterInput"
          onChange={()=>{setCharAllowed((prev=>!prev))}}
          />
          <label htmlFor="characterInput">Character</label>
        </div>

      </div>
    </div>
    </>
  )
}

export default App
