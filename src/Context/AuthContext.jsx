import { createContext, useContext, useReducer } from "react";
import { AuthReducer } from "../Reducer/AuthReducer.js";

const authContext = createContext();

const authToken = localStorage.getItem("token");
const istoken = authToken ? true : false;

const AuthProvider = ({ children }) => {

  const [authState, authDispatch] = useReducer(AuthReducer, {
    userInfo: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      isUserLoggedIn: istoken,
    },
    error: "",
    token: authToken,
  });

  return (
    <authContext.Provider
      value={{
        authState,
        authDispatch,
      }}
    >
      {children}
    </authContext.Provider>
  );
};

const useAuth = () => useContext(authContext);

export { useAuth, AuthProvider };
