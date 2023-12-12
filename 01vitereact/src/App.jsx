
import Grow from "./grow"


function App() {

  //writing js is ddone ussing {}
  const username = "Growth aand Time management"     //here all the js code iss written and the ffinaal outcome is written insisde return 

  return (
    //here it is allowed to return only one element , to solve this problem we use <>(known as fragment) or div tag
    <>
    <h1> react with vite {username} </h1>        { /* here {username} is known as evaluated expression all js code is written upside0 */}
   <Grow/>
   </>
  )
}

export default App
