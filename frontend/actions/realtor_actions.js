export const fetchRealtors = (address) => ({
    type: "FETCH_REALTORS",
    address
});

export const updateAddresses = (addresses) => ({
    type: "UPDATE_ADDRESSES",
    addresses
});

export const receiveRealtors = (realtors) => ({
  type: "RECEIVE_REALTORS",
  realtors
})
