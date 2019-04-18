import { fetchURI } from '../user/userTypes.js';
import axios from 'axios';
import { GET_TASKS, DELETE_TASK, EDIT_TASK } from './dashboardTypes';

export const getTasks = () => {
  return async dispatch => {
    const res = await axios.get(`${fetchURI}/todos`);
    const data = await res.data.slice(0, 30);
    dispatch({
      type: GET_TASKS,
      payload: data
    }) 
  }
}

export const deleteTask = id => {
  return dispatch => {
    return dispatch({
      type: DELETE_TASK,
      payload: id
    })
  }
}

// export const editTask = ({task}) => {
//   console.log(task);
//   return async dispatch => {
//     const res = await axios({
//       method: 'put',
//       url: `${fetchURI}/todos/${task.id}`,
//       data: task
//     });
//     const data = await res.data;
//     return dispatch({
//       type: EDIT_TASK,
//       payload: data
//     })
//   }
// }