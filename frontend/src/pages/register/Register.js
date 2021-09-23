import "./Register.css";

const Register = () => {
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
          <div className="registerBox">
            <input className="registerInput" placeholder="Username" />
            <input className="registerInput" placeholder="Email" />
            <input className="registerInput" placeholder="Password" />
            <input className="registerInput" placeholder="Confirm Password" />
            <button className="registerButton">Register</button>
            <button className="newLoginButton">Login</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
