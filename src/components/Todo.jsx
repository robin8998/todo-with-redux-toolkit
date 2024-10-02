import React from 'react'
import { useSelector ,useDispatch } from 'react-redux'
import { removeTodo } from '../features/todo/todoSlice'

function Todo() {
    const todos = useSelector((state)=> state.todos)
    const dispatch = useDispatch()
  return (
    <>  <div className='bg-blue-300 p-2 '>
        {todos.map((todo)=> (
         <li key={todo.id} 
         className='list-none '
         >
             {todo.text}
             <button 
             className='bg-red-700 w-14 h-8 rounded-xl ml-4 hover:bg-orange-700'
             onClick={()=> dispatch(removeTodo(todo.id))}
             >X</button>
         </li>
        ))}
        </div>
    </>
  )
}

export default Todo