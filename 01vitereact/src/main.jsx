import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'



// const anotherElement  = {
//     <a href = "https://google.com" target = '_blank'> Visit google </a>
// }

// const anotherUser = "Growth aur react"

// const reactElement = React.createElement{
//     'a',
//     {href : 'https://google.com' , target: '_blank'},
//     'click me to visit google',
        // anotherUser
// }



//createRoot creates a dom like structure and compares this dom with main dom and updte only those thing that was updated in the ui but
//but browser remove the whole dom and repaint it (page rreload) 
// js keeps all his track and creates a virtual dom tree and update everything in that 
//virtual dom is updated using fibre algo 
//reconsilation -- algo uses by react to differ one tree from another  -- this is known as virtual dom

ReactDOM.createRoot(document.getElementById('root')).render(

    <App />
    // anotherElement
    // reactElement

)
