import { configureStore } from "@reduxjs/toolkit";
import postReducer from './postSlice';

const fetchingStore = configureStore({
  reducer:{posts:postReducer}
});

export default fetchingStore;