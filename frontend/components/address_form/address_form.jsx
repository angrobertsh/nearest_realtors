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

  componentWillReceiveProps(nextProps){
    if(nextProps.address1 !== this.props.address1 && !(Object.keys(nextProps.address1).length === 0 && nextProps.address1.constructor === Object)){
      this.props.fetchRealtors(nextProps.address1);
    }
  }

  update(e){
    let stateUpdate = {};
    stateUpdate[e.target.name] = e.target.value;
    this.setState(stateUpdate);
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.updateAddresses(this.state);
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
