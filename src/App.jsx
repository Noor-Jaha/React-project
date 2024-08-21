

import { useState } from 'react';
import './App.css'

function App() {

  const [counter,setCounter] = useState(1);

  const addValue = () =>{
    setCounter(counter + 1)
  }

  const removeValue = () => {
   let newcounter = counter - 1;
    setCounter(newcounter);
  }


  return (
    <>
    <h1>React course</h1>
    <h2>counter value: {counter}</h2>
    <button
    onClick={addValue}
    >Add value</button> {' '}
    <button
    onClick={removeValue}
    >remove value</button>
    <p>footer:{counter} </p>
    </>
  )
}

export default App;
console.log('hello')
