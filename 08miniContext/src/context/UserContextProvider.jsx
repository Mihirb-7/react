import React from "react"
import UserContext from "./UserContext"

//provider means every component inside UserContext of have a global access of UserContext

const UserContextProvider = ({children}) => {                   //children is generic name  -- it passes props as it is   , the working of children is same as outlet
    const [user,setUser] = React.useState(null)                    
    return (                                          //here value is basically a prop
        <UserContext.Provider value={{user,setUser}}>            
        {children}  
        </UserContext.Provider>  
    )  
}  

export default UserContextProvider

