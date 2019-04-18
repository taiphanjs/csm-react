import { fetchURI } from '../user/userTypes.js';
import axios from 'axios';
import { GET_TASKS } from './dashboardTypes'

export const getTasks = () => {
  return async dispatch => {
    const res = await axios.get(`${fetchURI}/todos`);
    const data = await res.data;
    dispatch({
      type: GET_TASKS,
      payload: data
    }) 
  }
}