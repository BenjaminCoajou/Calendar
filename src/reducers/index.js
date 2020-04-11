import { combineReducers } from 'redux';
import counter from './counter';
import calendar from './calendar';

export default combineReducers({
  counter,calendar,
});
