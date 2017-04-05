import { connect } from 'react-redux';
import AddressForm from './address_form';
import * as REALTOR_ACTIONS from '../../actions/realtor_actions';

const mapStateToProps = (state, ownProps) => ({
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchRealtors: (address) => dispatch(REALTOR_ACTIONS.fetchRealtors(address));
  updateAddresses: (address1, address2) => dispatch(REALTOR_ACTIONS.updateAddresses(address1, address2))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddressForm);
