import { combineReducers } from 'redux';
import commonReducer from './common/commonReducer';
import userReducer from './user/userReducer';
import dashboardReducer from './dashboard/dashboardReducer';

const rootReducer = combineReducers({
  commonReducer,
  userReducer,
  dashboardReducer,
});
export default rootReducer;