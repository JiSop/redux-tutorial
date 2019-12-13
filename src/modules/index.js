import { combineReducers } from 'redux';
import counter from './counter';
import tasks from './tasks';

const rootReducer = combineReducers(
  {
    counter,
    tasks
  }
);

export default rootReducer;