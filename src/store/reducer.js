import { combineReducers } from 'redux';
import commonReducer from './common/commonReducer';
import userReducer from './user/userReducer';

const rootReducer = combineReducers({
  commonReducer,
  userReducer
});
export default rootReducer;