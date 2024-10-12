import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useSelector,useDispatch } from 'react-redux'
import {actions} from './store/index'

function App() {
  // const  counter = useSelector((state)=> state.counter);
  const counter = useSelector((state)=>state.counter);
  const num = useSelector((state)=>state.num);
  const dispatch = useDispatch();
  const increment = () =>{
    dispatch(actions.increment())
  }

  const decrement = () =>{
    dispatch(actions.decrement())
  }

  const multiplyBy2 =()=>{
    dispatch(actions.multiplyBy2(2));
  }

  const divideBy3=()=>{
    dispatch(actions.divideBy3(3));
  }
  return (
    <>
      <div>
        <h1>Counter app</h1>
        {/* <h2>{counter}</h2> */}
      </div>
      <div>
        <h1>Count</h1>
        <h2>{counter}</h2>
        <button onClick={increment}>INcrement</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={multiplyBy2}>Multiply by 2</button>
        <button onClick={divideBy3}>Divide by 3</button>
      </div>
    </>
  )
}

export default App
