import { connect } from 'react-redux';
import AddressForm from './address_form';
import * as REALTOR_ACTIONS from '../../actions/realtor_actions';

const mapStateToProps = (state, ownProps) => ({
  address1: state.realtors.address1,
  address2: state.realtors.address2
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchRealtors: (address) => dispatch(REALTOR_ACTIONS.fetchRealtors(address)),
  updateAddresses: (addresses) => dispatch(REALTOR_ACTIONS.updateAddresses(addresses)),
  updateAddress1: (address1) => dispatch(REALTOR_ACTIONS.updateAddress1(address1)),
  updateAddress2: (address2) => dispatch(REALTOR_ACTIONS.updateAddress2(address2))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddressForm);
