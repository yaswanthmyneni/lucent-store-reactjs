import { createContext, useContext, useReducer } from "react";
import { authReducer } from "../reducers";

const AuthContext = createContext();
const useAuthContext = () => useContext(AuthContext);

const AuthContextProvider = ({ children }) => {
  const [authState, authDispatch] = useReducer(authReducer, {
    firstName: '',
    lastName: '',
    email: null,
    password: '',
    confirmPassword: '',
    token: null,
  });

  const value = { authState, authDispatch };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export { useAuthContext, AuthContextProvider };
