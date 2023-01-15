import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../Redux/todo'
const AddTodo = () => {
  const [input,setInput]=useState('')
  const dispatch=useDispatch()
  const Add=()=>{
    dispatch(addTodo(input))
  }
  return (
    <div>
      <input placeholder='the tasck thatyou add' onChange={(e)=>setInput(e.target.value)} />
      <button onClick={Add}>Add</button>
    </div>
  )
}

export default AddTodo
