import React, { useState } from 'react'
import {useDispatch,useSelector} from 'react-redux';
import { addTodo,toggleTodo,deleteTodo } from './todoslice';

const Todo = () => {
  const [text,setText]=useState('');
  const todos = useSelector((state)=>state.todos);
  const dispatch = useDispatch();

  const handleSubmit = (e)=>{
    e.preventDefault();
    if(text.trim()){
      dispatch(addTodo(text));
      setText('');

    }
  }
  return (
    <div>
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
      <input 
      type="text"
      placeholder='Enter Todo'
      value={text}
      onChange={(e)=>setText(e.target.value)} 
      />
      <button type='submit'>Add</button>
      </form>

      <ul>
        {todos.map((todo)=>(
          <li key={todo.id}>
            <span style={{'textDecoration':todo.completed? 'line-through':'none','cursor':'pointer'}}
            onClick={()=>dispatch(toggleTodo(todo.id))}>{todo.text}</span>

            <button onClick={()=>dispatch(deleteTodo(todo.id))}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Todo