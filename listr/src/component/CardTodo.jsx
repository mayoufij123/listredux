import React from 'react'
import { useDispatch } from 'react-redux'
import {  deletTodo,  toggelTodo } from '../Redux/todo'
const CardTodo = ({minitodo}) => {
  console.log('mintodo eli jytini min todolist',minitodo)
  const dispatch=useDispatch()
  // partie redux
  
  const handelDelet=(id)=>{
    dispatch(deletTodo(id))
  }
  const Done=(id)=>{
    dispatch(toggelTodo(id))
  }

  return (
    <div>
      <table  border='1 px'>
      <ul  style={{display :'flex'}}>
        <td><li> {minitodo.text}</li></td>
        <td style={{dispaly:"flex"}} className='btn'>
        <button onClick={()=>Done(minitodo.id)}> {minitodo.isDone? 'is Done':'not yet'}</button>
        <button onClick={()=> handelDelet(minitodo.id)}>delet</button>
        </td>
      </ul>
      </table>
    </div>
  )
}

export default CardTodo
