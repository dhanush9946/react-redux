import React from 'react'
import { useSelector,useDispatch } from 'react-redux'

function App() {

  const count  = useSelector((state)=>state.count);

  const dispatch = useDispatch()
  return (
    <div>
      <h1>count:{count}</h1>
      <button onClick={()=>dispatch({type:'INCREMENT'})}>increment</button>
      <button onClick={()=> dispatch({type:'DECREMENT'})}>Decrement</button>
    </div>
  )
}

export default App