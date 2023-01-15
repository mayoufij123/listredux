import {createSlice} from "@reduxjs/toolkit";
import {v4 as uuidv4} from "uuid";
const TodoSlice= createSlice ({
    name:'todos',
    initialState:
        [{id:uuidv4(),text:"task1",isDone:false}, {id:uuidv4(),text:"task2",isDone:false},
  {id:uuidv4(),text:"task3",isDone:false},{id:uuidv4(),text:"task4",isDone:false}],
  reducers:{
  
  addTodo:(state,action)=>{
    const newadd={
      id:uuidv4(),
      isDone:false,
      text:action.payload
    }
    state.push(newadd)
  },
  deletTodo:(state,action)=>{
   return  state.filter((el)=>el.id !== action.payload)
  },
  toggelTodo:(state,action)=>{
    return state.map((el)=>(el.id ===action.payload ?{...el,isDone:! el.isDone}:el))
  }
  



} 
})
export const {addTodo,deletTodo,toggelTodo}=TodoSlice.actions
export default TodoSlice.reducer