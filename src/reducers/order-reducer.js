const orderReducer = (state, { type, payload }) => {
  switch (type) {
    case "SET_ORDER_DETAILS":
      return { ...state, orderDetails: [...state.orderDetails, payload] };
    default:
      return state;
  }
};

export { orderReducer };
