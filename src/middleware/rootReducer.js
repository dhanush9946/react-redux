import { combineReducers } from "redux";
import userReducer from "./uswerReducer";

const rootReducer = combineReducers({
  user:userReducer,
})
export default rootReducer