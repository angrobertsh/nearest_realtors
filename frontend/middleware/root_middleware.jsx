import { applyMiddleware } from 'redux';
import RealtorMiddleware from './realtor_middleware';

const RootMiddleware = applyMiddleware(RealtorMiddleware);

export default RootMiddleware;
