import * as REALTOR_ACTIONS from '../actions/realtor_actions';
import * as REALTOR_UTILS from '../util/realtor_util';

const RealtorMiddleware = ({state, dispatch}) => next => action => {

  let success;

  switch (action.type){
    case "UPDATE_ADDRESSES":
      success = (address1) => {
        dispatch(REALTOR_ACTIONS.reduceAddress1(address1));
      }
      REALTOR_UTILS.getCoordsFromLocation(action.addresses["address1"], success);
      success = (address2) => {
        dispatch(REALTOR_ACTIONS.reduceAddress2(address2));
      }
      REALTOR_UTILS.getCoordsFromLocation(action.addresses["address2"], success);
      return next(action)
    case "FETCH_REALTORS":
      success = (realtors) => {
        dispatch(REALTOR_ACTIONS.receiveRealtors(realtors));
      };
      REALTOR_UTILS.getRealtorsNearLocation(action.address, success);
      return next(action);
    default:
      return next(action);
  }
}

export default RealtorMiddleware
