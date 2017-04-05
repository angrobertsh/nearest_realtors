import { combineReducers } from 'redux';
import RealtorReducer from './realtor_reducer';

const RootReducer = combineReducers({
  realtors: RealtorReducer
});

export default RootReducer;
