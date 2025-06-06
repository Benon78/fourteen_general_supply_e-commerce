import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import "./CSS/Login.css";
import { usePageTittle } from "../Components/utils/Helper";

const LoginSignup = () => {
  usePageTittle('Login - Fourteen General Supply');
  const [showPassword, setShowPassword] = useState(false);
  const [SignIn, setSignIn] = useState(false);
  const handlePasswordToggle = () => setShowPassword(!showPassword);
  const handleSignInToggle = () => setSignIn(!SignIn)
  const [inputValues, setInputValues] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    setInputValues({ ...inputValues, [e.target.name]: e.target.value });
  };
  return (
    <div className="login">
      <div className="login-container">
        {SignIn ? <h2>Sign In</h2> : <h2>Sign Up</h2>}
        <div className="signUp-form">
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={inputValues.email}
            onChange={handleInputChange}
            required
          />
          <div className="input-password">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Enter your Password"
              value={inputValues.password}
              onChange={handleInputChange}
              aria-label="Password"
              aria-describedby="password-helper-text"
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              title="Must contain at least 8 characters, including uppercase letters, lowercase letters, and numbers."
              id="password"
              required
            />
            <span>
              {showPassword ? (
                <FaEyeSlash
                  onClick={handlePasswordToggle}
                  className="icon-eye"
                />
              ) : (
                <FaEye onClick={handlePasswordToggle} className="icon-eye" />
              )}
            </span>
          </div>
          {SignIn ? (
            <button type="submit" className="link-btn">
              Login In
            </button>
          ) : (
            <button type="submit" className="link-btn">
              Register
            </button>
          )}
        </div>
        <div className="login-footer">
          {SignIn ? (
            <>
              <p>
                Forget password?
                <button>Recover</button>
              </p>
              <p>
                Don't have an account?
                <button onClick={handleSignInToggle}>Sign up</button>
              </p>
            </>
          ) : (
            <p>
              Already have an account?
              <button onClick={handleSignInToggle}>Sign in</button>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
