import React from 'react';
import RealtorIndexItem from './realtor_index_item';

class RealtorIndex extends React.Component{
  constructor(props){
    super(props);
    this.renderRealtors = this.renderRealtors.bind(this);
    this.sortRealtors = this.sortRealtors.bind(this);
  }

  renderRealtors(){
    let realtors = this.sortRealtors();
    return realtors.map((key) => {
      return <RealtorIndexItem key={key} realtor={this.props.realtor[key]} />
    });
  }

  sortRealtors(){
    return Object.keys(this.props.realtors);
  }

  render(){
    return (
      <div id="realtor-index-container">
        <div className="title">Nearby Realtors:</div>
        <div id="realtor-index">
          { this.renderRealtors() }
        </div>
      </div>
    );
  }
}

export default RealtorIndex;
