export const getCoordsFromLocation = (location, success) => {
  const geocoder = new google.maps.Geocoder();
  geocoder.geocode({address: location}, (results, status) => {
    if(status == google.maps.GeocoderStatus.OK){
      // this is a latlng object - for numbers do .lat() and .lng() on it
      success(results[0].geometry.location);
    } else {
      alert("Invalid location, please try a different location");
    }
  });
}

export const getRealtorsNearLocation = (location, success) => {
  const request = {
    location: location,
    radius: 16100,
    query: "real estate agency"
  }
  let service = new google.maps.places.PlacesService(document.createElement('div'));
  service.textSearch(request, (results, status) => {
    if(status == google.maps.places.PlacesServiceStatus.OK){
      success(postProcess(results));
    } else {
      alert("No realtors in this area")
    }
  });
}

const postProcess = (results) => {
  let realtorObj = {}
  results.forEach((val, idx) => {
    realtorObj[idx] = {location: val.geometry.location, address: val.formatted_address, name: val.name};
  })
  return realtorObj;
}
