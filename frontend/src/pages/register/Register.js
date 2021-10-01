import { Box, Modal, Typography } from "@material-ui/core";
import axios from "axios";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./Register.css";

const Register = () => {
  const usernameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPassword = useRef();

  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleClose = () => setError(false);

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (passwordRef.current.value !== confirmPassword.current.value){
      confirmPassword.current.setCustomValidity("Passwords do not match")
    }
    else{
      await axios
        .post("auth/register", {
          username: usernameRef.current.value,
          email: emailRef.current.value,
          password: confirmPassword.current.value,
        })
        .then(() => setSuccess(true))
        .catch(() => setError(true));
    }
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    borderRadius: 30,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    p: 4,
  };

  setTimeout(() => success && window.location.replace("/login"), 3000);

  return (
    <div className="register">
      <div className="registerWrapper">
        <div className="registerLeft">
          <h3 className="registerLogo">Panchayat 🏡</h3>
          <span className="registerDesc">
            Connect with friends around the world on Panchayat.
          </span>
        </div>
        <div className="registerRight">
          <form className="registerBox" onSubmit={handleSignUp}>
            <input
              className="registerInput"
              placeholder="Username"
              ref={usernameRef}
              required
            />
            <input
              className="registerInput"
              placeholder="Email"
              type="email"
              ref={emailRef}
              required
            />
            <input
              className="registerInput"
              placeholder="Password"
              type="password"
              ref={passwordRef}
              required
            />
            <input
              className="registerInput"
              placeholder="Confirm Password"
              type="password"
              ref={confirmPassword}
              required
            />
            <button className="registerButton">Register</button>
            <Link to="/login">
            <button className="newLoginButton">Login</button>
            </Link>
          </form>
          <Modal
            open={error}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Error in registration
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Please check your credentails and try again
              </Typography>
            </Box>
          </Modal>
          <Modal
            open={success}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                User registered
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Redirecting to login page ..
              </Typography>
            </Box>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Register;
