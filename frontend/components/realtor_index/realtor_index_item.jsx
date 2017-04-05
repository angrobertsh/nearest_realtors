import React from 'react';

class RealtorIndexItem extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    let realtor = this.props.realtor;

    return (
      <div className="realtor">
        <div className="realtor-distance">
          <h4>{this.props.distance} mi.</h4>
        </div>
        <div className="realtor-info">
          <div className="realtor-name">
            <h5>{realtor.name}</h5>
          </div>
          <div className="realtor-address">
            {realtor.address}
          </div>
        </div>
      </div>
    );
  }
};

export default RealtorIndexItem;
