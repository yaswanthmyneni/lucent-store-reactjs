const productPageReducer = (state, action) => {
  switch (action.type) {
    case "SORT_BY":
      return { ...state, sortBy: action.payload };
    case "YOGA_MATS":
      return {
        ...state,
        categoryName: {
          ...state.categoryName,
          yogamats: action.payload,
        },
      };
    case "PANTS":
      return {
        ...state,
        categoryName: {
          ...state.categoryName,
          pants: action.payload,
        },
      };
    case "SHIRTS":
      return {
        ...state,
        categoryName: {
          ...state.categoryName,
          shirts: action.payload,
        },
      };
    case "RATING":
      return { ...state, rating: action.payload };
    case "PRODUCT_LIST":
      return { ...state, productList: action.payload };
    case "LOADING":
      return { ...state, loading: action.payload };
    case "CLEAR":
      return {
        ...state,
        categoryName: {
          yogamats: false,
          pants: false,
          shirts: false,
        },
        sortBy: true,
        rating: 0,
      };
    default:
      return state;
  }
};

export { productPageReducer };
