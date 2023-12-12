import { useState } from 'react'       //importing hooks , hooks is a method to controlling the UI in react
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  ///hook                         //setcounter takes always new value which is to be updated in ui
  let [counter, setCounter] = useState(5)  //5 is default vale here    //useState return 2 values in arrray form ,in this project siatution we set it counter nad setcounter --  at 0th index it stores counter and at 1st index there is fn which is setCounter

  // let counter = 5

  const addValue = () => {
    console.log("clicked", Math.random());
    counter += 1;
    setCounter(counter)
  }
  const removeValue = () => {
    if (counter > 0) {
      counter -= 1;
      setCounter(counter)
    }

  }

  return (

    <>
      <h1>Growth and react </h1>
      <h2>Counter value: {counter}</h2>
      <button
        onClick={addValue}
      >Add value</button>
      <br />
      <button
        onClick={removeValue}
      >Remove value</button>
    </>
  )
}

export default App


