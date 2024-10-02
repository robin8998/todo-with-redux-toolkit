import {createSlice,nanoid} from '@reduxjs/toolkit' 

const initialState  = {
    todos : [{id:1, text : "Hello world"}]
}

const todoSlice = createSlice({
    name : 'todo',
    initialState,
    reducers: {
        addTodo : (state,action) =>{    //addTodo reducer 
            const todo = {
                id : nanoid() ,
                text : action.payload
            }
            state.todos.push(todo)
        },
        removeTodo : (state,action) =>{  //remove todo reducer 
            state.todos = state.todos.filter((todo)=> (todo.id !== action.payload))
        }
    }
})

export const {addTodo,removeTodo} = todoSlice.actions

export default todoSlice.reducer