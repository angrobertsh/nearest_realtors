import { connect } from 'react-redux';
import RealtorIndex from './realtor_index';

const mapStateToProps = (state, ownProps) => ({
  realtor: state.realtors.realtors,
  address1: state.realtors.address1,
  address2: state.realtors.address2
});

const mapDispatchToProps = (dispatch, ownProps) => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RealtorIndex);
