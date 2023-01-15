import React from 'react'
import { useSelector } from 'react-redux'
import CardTodo from './CardTodo'
const TodoList = () => {
  const todos=useSelector((state)=>state.todos)
console.log('todos eli jaytini min redux',todos)
  
  return (
    <div> 
      
     {todos.map((e)=><CardTodo minitodo={e}/>)}
    </div>
  )
}

export default TodoList
