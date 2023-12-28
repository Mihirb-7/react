import {createContext, useContext} from "react"

export const TodoContext = createContext({
    todos: [                          //todos is a  array
        {                                    //every todo is an object
            id: 1,                            //these are properties
            todo: " Todo msg",
            completed: false,
        }
    ],
    //fuctionality -- here definition is not written
    addTodo: (todo) => {},
    updateTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {}
     //we can say createContext is an object
})


export const useTodo = () => {        //method returning context
    return useContext(TodoContext)
}

//exporting provider 
export const TodoProvider = TodoContext.Provider