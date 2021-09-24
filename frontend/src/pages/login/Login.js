import "./Login.css"

const Login = ()=>{
    return(
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">Panchayat 🏡</h3>
                    <span className="loginDesc">
                        Connect with friends around the world on Panchayat.
                    </span>
                </div>
                <div className="loginRight">
                    <div className="loginBox">
                        <input  className="loginInput" placeholder="Email"/>
                        <input  className="loginInput" placeholder="Password"/>
                        <button className="loginButton">Login</button>
                        <span className="loginForgort">Forgort Password ?</span>
                        <button className="registerXButton">Create a new account</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login