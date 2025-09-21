import React, { useEffect } from 'react'
import {useDispatch,useSelector} from 'react-redux';
import { fetchposts } from './postSlice';

const Posts = () => {

  const dispath = useDispatch();
  const {loading,posts,error} = useSelector((state)=>state.posts);

  useEffect(()=>{
    dispath(fetchposts())
  },[dispath]);

  if(loading) <p>Loading...</p>
  if(error) <p>error:{error.message}</p>
  return (
    <div>

      <h1>Posts</h1>
      <ul>
        {posts.map((post)=>(
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default Posts