//reducers is a functionality -- we can also call it slice inn redux toolkit  -- slice is a bigger version of reducer

import {createSlice , nanoid} from '@reduxjs/toolkit'      //nanoid -- it is used to generqate unique ids

///initial state of store
const initialState = {
    todos: [{id: 1 , text: "Hello world" }]
}

export const todoSlice = createSlice({                    //method
    name: 'todo' ,         //name is a property in redux toolkit
    initialState ,               
    reducers: {          //reducers -- in reducres we can write property and function , object
        addTodo: (state , action) => {
            const todo = {
                id: nanoid() , 
                text: action.payload 

            }
            state.todos.push(todo)
        },
        removeTodo: (state , action) => { 
            state.todos = state.todos.filter((todo) => todo.id !== action.payload )                 //filter gives true value
        } , 
    }          
})


//to export reducer we have to do in this way -- in one we export functionality , and in another we export reducer to export
export const {addTodo , removeTodo } = todoSlice.actions

export default todoSlice.reducer