import merge from 'lodash/merge';

const defaultState = {
  address1: {},
  address2: {},
  realtors: {},
  errors: []
};

const RealtorReducer = (state = defaultState, action) => {

  let newState = merge({}, state);

  switch (action.type){
    case "REDUCE_ADDRESS_1":
      newState = merge(newState, {address1: action.address1})
      return newState;
    case "REDUCE_ADDRESS_2":
      newState = merge(newState, {address2: action.address2})
      return newState;
    case "RECEIVE_REALTORS":
      newState = merge(newState, {realtors: action.realtors})
      return newState;
    default:
      return newState;
  }
}


export default RealtorReducer;
