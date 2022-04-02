import { createContext, useContext, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthReducer } from "../Reducer/AuthReducer.js"

const authContext = createContext();

const authToken = localStorage.getItem("token");
const istoken = authToken ? true : false;


const AuthProvider = ({ children }) => {
  const navigator = useNavigate();

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
  });

  const { firstName, lastName, email, password, confirmPassword } = authState.userInfo;

  const signUpHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`/api/auth/signup`, {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        confirmPassword: confirmPassword,
      });
      localStorage.setItem("token", response.data.encodedToken);
      authDispatch({
        type: "IS_USER_LOGGED_IN",
      });
      navigator("/logIn");
    } catch (error) {
      console.log(error);
      authDispatch({
        type: "AUTH_ERROR",
        payload: "Sign up failed",
      });
    }
  };

  const logInHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`/api/auth/login`, {
        email: email,
        password: password,
      });
      localStorage.setItem("token", response.data.encodedToken);

      authDispatch({
        type: "IS_USER_LOGGED_IN"
      });
      navigator("/");
    } catch (error) {
      console.log(error);
      authDispatch({
        type: "AUTH_ERROR",
        payload: "Invalid email or password",
      });
    }
  };
  
  const logOutHandler = () => {
    localStorage.removeItem("token");
    authDispatch({
      type: "IS_USER_LOGGED_IN",
    });
    navigator("/");
  };

  return (
    <authContext.Provider
      value={{
        authState,
        authDispatch,
        signUpHandler,
        logInHandler,
        logOutHandler,
      }}
    >
      {children}
    </authContext.Provider>
  );
};

const useAuth = () => useContext(authContext);

export { useAuth, AuthProvider };
