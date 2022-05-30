const checkoutReducer = (state, { type, payload }) => {
  switch (type) {
    case "ADD_ADDRESS":
      return { ...state, addressList: [...state.addressList, payload] };
    case "SET_ADDRESS_ID":
      return { ...state, addressId: payload };
    default:
      return state;
  }
};

export { checkoutReducer };
