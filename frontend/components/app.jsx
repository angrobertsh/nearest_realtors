import React from 'react';
import AddressFormContainer from './address_form/address_form_container';
import RealtorIndexContainer from './realtor_index/realtor_index_container';
import Title from './title/title';

const App = () => (
  <div className='app-container'>
    <Title />
    <AddressFormContainer />
    <RealtorIndexContainer />
  </div>
);

export default App;
