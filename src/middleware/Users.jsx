import {useSelector,useDispatch} from 'react-redux'
import { fetchUsers } from './action'
import { useEffect } from 'react'

function Users(){
  const {loading,users,error}=useSelector((state)=>state.user);

  const dispatch = useDispatch();

  useEffect(()=>{
  dispatch(fetchUsers())},[dispatch])

if(loading) return <p>Loading......</p>
if(error) return <p>Error:  {error}</p>

return(
  <div>
    <h2>users list</h2>
    <ul>
      {users.map((user)=>(
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  </div>
)
}

export default Users

