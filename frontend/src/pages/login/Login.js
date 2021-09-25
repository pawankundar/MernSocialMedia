import "./Login.css";
import { useContext, useRef } from "react";
import axios from "axios";
import { Context } from "../../context/context";
import { CircularProgress } from "@material-ui/core";

const Login = () => {
  const username = useRef();
  const password = useRef();
  const { dispatch , isFetching,user} = useContext(Context);
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({type : "LOGIN_START"})
    await axios
      .post("auth/login", {
        username: username.current.value,
        password: password.current.value,
      })
      .then((resp) => dispatch({ type: "LOGIN_SUCCESS", payload: resp.data }))
      .catch((err) => dispatch({ type: "LOGIN_FAILURE", payload: err }));
  };
  console.log(user)

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Panchayat 🏡</h3>
          <span className="loginDesc">
            Connect with friends around the world on Panchayat.
          </span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleSubmit}>
            <input
              className="loginInput"
              placeholder="User name"
              
              ref={username}
            />
            <input
              className="loginInput"
              placeholder="Password"
              type="password"
              required
              
              ref={password}
            />
            <button className="loginButton">{isFetching?<CircularProgress color="white" size="15px"/>:"Login"}</button>
            <span className="loginForgort">Forgort Password ?</span>
            <button className="registerXButton">{isFetching?<CircularProgress color="white" size="15px"/>:"Create a new account"}</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
