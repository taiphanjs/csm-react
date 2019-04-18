import { GET_TASKS, DELETE_TASK, EDIT_TASK } from './dashboardTypes';

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
    case DELETE_TASK: {
      return Object.assign({}, state, {
        tasksList: state.tasksList.filter(task => task.id !== action.payload)
      });
    }
    default: 
      return state;
  }
}

export default dashboardReducer;