import * as REALTOR_ACTIONS from '../actions/realtor_actions';

const RealtorMiddleware = ({state, dispatch}) => next => action => {
  const error = (errors) => {
    console.log(errors);
    flash("error");
    debugger
  };

  let success = (realtors) => {
    dispatch(REALTOR_ACTIONS.receiveRealtors(realtors));
  };

  switch (action.type){
    case "FETCH_REALTORS":
      // ajax to google places API to find all realtors within 10 miles of action.address dispatching to success on success
      return next(action);
    default:
      return next(action);
  }
}

export default RealtorMiddleware
