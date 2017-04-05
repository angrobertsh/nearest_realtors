export const fetchRealtors = (address) => ({
    type: "FETCH_REALTORS",
    address
});

export const updateAddress1 = (address1) => ({
    type: "UPDATE_ADDRESS_1",
    address1
})

export const updateAddress2 = (address2) => ({
    type: "UPDATE_ADDRESS_2",
    address2
})

export const reduceAddress1 = (address1) => ({
    type: "REDUCE_ADDRESS_1",
    address1
})

export const reduceAddress2 = (address2) => ({
    type: "REDUCE_ADDRESS_2",
    address2
})

export const receiveRealtors = (realtors) => ({
  type: "RECEIVE_REALTORS",
  realtors
})

export const updateAddresses = (addresses) => ({
    type: "UPDATE_ADDRESSES",
    addresses
})

export const reduceAddresses = (addresses) => ({
    type: "REDUCE_ADDRESSES",
    addresses
})
