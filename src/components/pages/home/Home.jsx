import React from 'react'
import { useState } from 'react';

const Home = () => {

  const getAlert = () =>{
    alert("Button qu Click kiya ");
  }
  const [number,setNumber] = useState(200)

  const increment = () =>{
    setNumber(number+1)
  }

    const Decrement = () =>{
    setNumber(number-1)
  }

  return (
   <>
  
   <button onClick={getAlert}>Click Me</button>
   
   <button onClick={increment}>Increment</button>

   <button onClick={Decrement}>Decrement</button>

     
     
     <h1>Number : {number}</h1>
   
   
   </>
  )
}

export default Home
