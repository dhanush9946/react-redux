import {createStore,applyMiddleware,compose} from "redux";
import cReducer from "./cReducer";

const logger = store=> next => action => {
  console.log("Dispatching",action);
  const result = next(action);
  console.log("Next state:", store.getState());
  return result;
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store2 = createStore(
  cReducer,
  composeEnhancers(applyMiddleware(logger))
);

export default store2