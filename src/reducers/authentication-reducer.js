const authReducer = (authState, action) => {
  switch (action.type) {
    case "TOKEN":
      return { ...authState, token: action.payload };
    case "EMAIL":
      return { ...authState, email: action.payload };
    case "PASSWORD":
      return { ...authState, password: action.payload };
    case "CONFIRM_PASSWORD":
      return { ...authState, confirmPassword: action.payload };
    case "FIRST_NAME":
      return { ...authState, firstName: action.payload };
    case "LAST_NAME":
      return { ...authState, lastName: action.payload };
    default:
      return authState;
  }
};

export { authReducer };
