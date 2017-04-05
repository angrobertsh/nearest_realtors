import merge from 'lodash/merge';

const defaultState = {
  address1: "",
  address2: "",
  realtors: {},
  errors: []
};

const RealtorReducer = (state = defaultState, action) => {

  let newState = merge({}, state);

  switch (action.type){
    case "UPDATE_ADDRESSES":
      newState = merge(newState, {address1: action.addresses["address1"], address2: action.addresses["address2"]})
      return newState;
    case "RECEIVE_REALTORS":
      newState = merge(newState, {realtors: action.realtors})
      return newState;
    default:
      return newState;
  }
}


export default RealtorReducer;
