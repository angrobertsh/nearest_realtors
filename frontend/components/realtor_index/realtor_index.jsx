import React from 'react';
import RealtorIndexItem from './realtor_index_item';

class RealtorIndex extends React.Component{
  constructor(props){
    super(props);
    this.renderRealtors = this.renderRealtors.bind(this);
    this.sortRealtors = this.sortRealtors.bind(this);
    this.calculateDistance = this.calculateDistance.bind(this);
    this.getDistanceFromLatLonInMi = this.getDistanceFromLatLonInMi.bind(this);
    this.deg2rad = this.deg2rad.bind(this);
  }

  renderRealtors(){
    let realtors = this.sortRealtors();
    let distance = 0;
    return realtors.map((realtorObj, idx) => {
      distance = parseFloat(Object.keys(realtorObj)[0]);
      return <RealtorIndexItem key={idx} realtor={realtorObj[distance]} distance={distance} />
    });
  }

  sortRealtors(){
    let keys = Object.keys(this.props.realtors);
    keys = keys.map((val) => (parseInt(val)));
    let obj = {};

    let sortedArray = keys.map((key) => {
      obj = {};
      obj[this.calculateDistance(this.props.realtors[key])] = this.props.realtors[key];
      return obj;
    });

    return sortedArray.sort((obj1, obj2) => {
      if(parseFloat(Object.keys(obj1)[0]) < parseFloat(Object.keys(obj2)[0])){
        return -1;
      } else {
        return 1;
      }
    });
  }

  calculateDistance(realtor){
    const x1 = realtor.location.lat();
    const y1 = realtor.location.lng();
    const x2 = this.props.address1.lat();
    const y2 = this.props.address1.lng();
    const x3 = this.props.address2.lat();
    const y3 = this.props.address2.lng();

    const d1 = this.getDistanceFromLatLonInMi(x1, y1, x2, y2);
    const d2 = this.getDistanceFromLatLonInMi(x2, y2, x3, y3);
    // Math.pow((Math.pow((x2-x1), 2) + Math.pow((y2-y1), 2)), .5);
    // Math.pow((Math.pow((x3-x2), 2) + Math.pow((y3-y2), 2)), .5);

    return Math.round((d1 + d2) * 100) / 100;
  }

  getDistanceFromLatLonInMi(lat1,lon1,lat2,lon2) {
    const R = 6371;
    const dLat = this.deg2rad(lat2-lat1);  // deg2rad below
    const dLon = this.deg2rad(lon2-lon1);
    const a =
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(this.deg2rad(lat1)) * Math.cos(this.deg2rad(lat2)) *
      Math.sin(dLon/2) * Math.sin(dLon/2)
      ;
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    const d = R * c * .62;
    return d;
  }

  deg2rad(deg) {
    return deg * (Math.PI/180)
  }

  render(){
    return (
      <div id="realtor-index-container">
        <div id="realtor-title"><h3>Nearby Realtors:</h3></div>
        <div id="realtor-index">
          { this.renderRealtors() }
        </div>
      </div>
    );
  }
}

export default RealtorIndex;
