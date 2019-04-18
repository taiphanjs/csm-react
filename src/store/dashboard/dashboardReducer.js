import { GET_TASKS } from './dashboardTypes';

const initialState = {
  tasksList: [],
  task: {}
}

const dashboardReducer = (state = initialState, action) => {
  switch(action.type) {
    case GET_TASKS: {
      return Object.assign({}, state, {
        tasksList: action.payload
      })
    } 
    default: 
      return state;
  }
}
export default dashboardReducer;