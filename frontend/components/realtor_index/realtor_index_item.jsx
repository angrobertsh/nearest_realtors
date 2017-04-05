import React from 'react';

class RealtorIndexItem extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    let realtor = this.props.realtor;

    return (
      <div className="realtor">
        <div className="realtor-name">
          // realtor.name
        </div>
        <div className="realtor-address">
          // realtor.address
        </div>
      </div>
    );
  }
};

export default RealtorIndexItem;
