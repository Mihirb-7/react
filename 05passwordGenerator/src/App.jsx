import { useState , useCallback, useEffect , useRef} from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

//useRef hook
const passwordRef = useRef(null)


  // callback -- hook which is used to effecient run of fn passwordGnerator , it stores the things in cache and used it when fn is called again
  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberAllowed) str += "0123456789"
    if(charAllowed) str += "!@#$%^&*(){}|?><';`~"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random()* str.length+1)   //random char pickinng from str
      pass += str.charAt(char)
    }

    setPassword(pass)


  } , [length , numberAllowed , charAllowed , setPassword])    // in callback fn and dependencies(in array format) is passed , here setPassword is used for memoization , optimization , stors in cache

 const copyPasswordToClipboard = useCallback(() => {
  passwordRef.current?.select();                     //? is used for optional select , means when there is valve present then only select
  // passwordRef.current?.getSelectionRange(0,4);              //select in range
  window.navigator.clipboard.writeText(password)
 } , [password])      //passward is passed for optimization

  //hook -- useEffect -- when page is loaded then at first time it is called
  useEffect(() => {passwordGenerator()} , [length , numberAllowed , charAllowed , passwordGenerator])                    //here callback and dependency array 
  return (
 
  <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-pink-700'>
    <h1 className='text-white text-center my-3'>Password generator</h1>
    <div className='flex shadow rounded-lg overflow-hidden mb-4'>
    <input type="text" value = {password}
    className='outline-none w-full py-1 px-3'
    placeholder='Password'
    readOnly
    ref = {passwordRef}
    />

    <button 
    onClick = {copyPasswordToClipboard}
    className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>copy</button>
    </div>
<div className='flex text-sm gap-x-2'>
  <div className='flex item-sm gap-x-1'>
    <input type="range"
    min = {6}
    max= {100}
    value= {length}
    className = 'cursor-pointer'
    onChange={(e) => {setLength(e.target.value)}}
    />
    <label> Length: {length}</label>
  </div>
  <div className='flex items-center gap-x-1'>
    <input type="checkbox" 
     defaultChecked = {numberAllowed}
     id = "numberInput"
     onChange={() => {
      setNumberAllowed((prev) => !prev)
     }}
    />

<label htmlFor='numberInput'> Numbers </label>
  </div>
  <div className='flex items-center gap-x-1'>
    <input type="checkbox"
    defaultChecked = {charAllowed}
    id = "characterInput"
    onChange={() => {
      setCharAllowed((prev) => !prev);         //calback which have acces of prev value , this is done to make checkbox tick or untick
    }}
    />
    <label htmlFor="characterInput"> Characters </label>
  </div>
</div>
  </div>
  )
}

export default App
