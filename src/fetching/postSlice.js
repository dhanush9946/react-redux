import { createSlice,createAsyncThunk} from "@reduxjs/toolkit";

export const fetchposts =  createAsyncThunk('posts/fetchposts', async()=>{
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  return await response.json();
})

const postSlice = createSlice({
  name:'posts',
  initialState:{loading:false,posts:[],error:null},
  reducers:{},
  extraReducers:(builder)=>{
    builder
    .addCase(fetchposts.pending,(state)=>{
      state.loading = true;
      state.error = null;
    })
    .addCase(fetchposts.fulfilled,(state,action)=>{
      state.loading = false;
      state.posts = action.payload;
    })
    .addCase(fetchposts.rejected,(state,action)=>{
      state.loading = false;
      state.error = action.error.message;
    })
  },
});
export default postSlice.reducer