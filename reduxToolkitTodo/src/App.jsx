import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {
  
  return (
    <>
      <h1>Learn about redux toolkit</h1>
      <AddTodo />
      <Todos />
    </>
  )
}

export default App


/*Redux is core library whereas react-redux is implementation for communication of raect and redux  

steps -- 
first we have to make store  -- every applicatiion have single store known as single source of truth
features is known as slice -- we create slice using createSlice method 

*/

