import React, { useState } from 'react'
import {useDispatch,useSelector} from 'react-redux';
import { addTodo,deleteTodo } from './todoSlice';

const Todo = () => {
  const dispatch = useDispatch();
  const todo = useSelector((state)=>state.todos);

  const [input,setInput]= useState('');
  return (
    <div>
      <h1>Todo List</h1>

      <input 
      type="text"
      placeholder='Enter Todo'
      value={input}
      onChange={(e)=>setInput(e.target.value)}
       />
       <button onClick={()=>dispatch(addTodo(input))}>Add</button>

       <ul>
        {todo.map((t)=>(
          <li key={t.id}>{t.text}
          <button onClick={()=>dispatch(deleteTodo(t.id))}>Delete</button>
          </li>
        ))}
       </ul>
    </div>
  )
}

export default Todo