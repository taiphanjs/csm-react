import * as userActions from './userTypes';
import axios from 'axios';

export const getUsers = () => {
  return async dispatch => {
    const res = await axios.get(`${userActions.fetchURI}/users`)
    const data = await res.data;
    return dispatch({
      type: userActions.GET_USERS,
      payload: data
    })
  }
}