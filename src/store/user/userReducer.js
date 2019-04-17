import * as userActions from './userTypes';

const initialState = {
  loaded: false,
  usersList: []
} 

const userReducer = (state = initialState, action) => {
  switch(action.type) {
    case userActions.GET_USERS: {
      return Object.assign({}, state, {
        loaded: true,
        usersList: action.payload
      });
    }
    default:
    return state;
  }
}

export default userReducer;