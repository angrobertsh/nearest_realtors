import React from 'react';

class AddressForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      address1: "",
      address2: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  update(e){
    let stateUpdate = {};
    stateUpdate[e.target.name] = e.target.value;
    this.setState(stateUpdate);
  }

  handleSubmit(e){
    e.preventDefault();
    Promise.resolve(this.props.updateAddresses(this.state)).then(this.props.fetchRealtors(this.props.address1));
  }

  render(){
    return (
      <div id="address-form-container">
        <form onSubmit={this.handleSubmit} className="address-form">
          <input name="address1" placeholder="Address 1" onChange={this.update} />
          <input name="address2" placeholder="Address 2" onChange={this.update} />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default AddressForm;
