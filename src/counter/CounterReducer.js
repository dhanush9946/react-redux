

function counterReducer(state = {count:0},action){
  switch(action.type){
    case 'Increment':
      return {count:state.count + 1};
    case "Decrement":
      return {count:state.count -1};
    default:
      return state;
  }
}
export default counterReducer;