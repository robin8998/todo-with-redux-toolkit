import React, {  useState } from 'react'
import {useDispatch} from 'react-redux'
import { addTodo } from '../features/todo/todoSlice'


function AddTodo() {
    const [input,setInput] = useState('')
    const dispatch = useDispatch()

    const addTodoHandler=(e)=>{
        e.preventDefault()
        dispatch(addTodo(input))
        setInput('')
    }
  return (
    <form onSubmit={addTodoHandler}
    className='m-5 bg-gray-500'
     >
        <input type="text" 
        placeholder='Enter Todo'
        value={input}
        onChange={(e)=> setInput(e.target.value)}
        />
        <button 
        className='bg-green-700 w-14 h-8 rounded-xl ml-4 hover:bg-yellow-500'
        type='submit'>Add</button>
    </form>
  )
}

export default AddTodo