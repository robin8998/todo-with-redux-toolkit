import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo } from '../features/todo/todoSlice'

function Todo() {
  const todos = useSelector((state) => state.todos)
  const dispatch = useDispatch()

  return (
    <div className="max-w-md mx-auto mt-8 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg shadow-lg overflow-hidden">
      <h2 className="bg-blue-600 text-white text-xl font-semibold py-3 px-4">My Todos</h2>
      
      {todos.length === 0 ? (
        <p className="p-6 text-gray-500 text-center">No todos yet. Add one above!</p>
      ) : (
        <ul className="divide-y divide-blue-200">
          {todos.map((todo) => (
            <li 
              key={todo.id}
              className="flex items-center justify-between px-4 py-3 hover:bg-blue-50 transition-colors duration-150"
            >
              <span className="text-gray-800 break-words flex-grow mr-4">{todo.text}</span>
              <button
                onClick={() => dispatch(removeTodo(todo.id))}
                className="bg-red-500 text-white w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                aria-label="Remove todo"
              >
                ×
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Todo