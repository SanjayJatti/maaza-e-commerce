import React from "react";
import "../Auth.css";
import { Header } from "../../Header/Header";
import { Link } from "react-router-dom";
import { useAuth } from "../../../Context/AuthContext";

const Login = () => {
  const { authState, authDispatch, logInHandler } = useAuth();
  const { error } = authState;
  const { firstName, lastName, email, password, confirmPassword } = authState.userInfo;

  return (
    <div>
      <Header />
      <div className="log-in-wrapper flex-center" onSubmit={(e)=>logInHandler(e,email, password )}>
        <form className="form-container">
          <h1 className="form-title primary">Log In</h1>
          <div className="input-container">
            <label htmlFor="email">Email*</label>
            <input
              required
              type="email"
              name="email"
              id="email"
              placeholder="example@xyz.com"
              onChange={(e) =>
                authDispatch({ type: "USER_EMAIL", payload: e.target.value })
              }
            />
          </div>
          <div className="input-container">
            <label htmlFor="password">Password*</label>
            <input
              required
              type="password"
              name="password"
              id="password"
              onChange={(e) =>
                authDispatch({ type: "USER_PASSWORD", payload: e.target.value })
              }
            />
          </div>
          <div className="forget-password flex-row">
            <div className="input-checkbox">
              <input
                type="checkbox"
                id="remember-me"
                name="remember-me"
                value="remember-me"
              />
              <label className="text-medium" htmlFor="remember-me">
                Remember me
              </label>
            </div>
            <Link to="/login"className="text-medium text-primary">
              {" "}
              Forget your password?
            </Link>
          </div>
          <button type="submit" className="btn btn-primary">
            Log In
          </button>
          <button className="btn btn-secondary" onClick={(e) =>logInHandler(e,"adarshbalika@gmail.com","adarshBalika123" )}>
            Guest LogIn
          </button>
          <p className="text-medium">
            Don't have an account?
            <Link to="/signup" className="text-medium text-primary">
              Create an account
            </Link>
          </p>
          <h4 className="error-msg">{error}</h4>
        </form>
      </div>
    </div>
  );
};
export { Login };
