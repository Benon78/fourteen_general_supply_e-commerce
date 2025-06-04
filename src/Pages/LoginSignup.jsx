import { Link} from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState} from "react";
import './CSS/Login.css'

const LoginSignup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handlePasswordToggle = () => setShowPassword(!showPassword);
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
      <h2>Sign Up</h2>
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
              <FaEyeSlash onClick={handlePasswordToggle} className="icon-eye" />
            ) : (
              <FaEye onClick={handlePasswordToggle} className="icon-eye" />
            )}
          </span>
        </div>
        <button type="submit" className="link-btn">
          Sign Up
        </button>
      </div>
      <div className="login-footer">
        <p>
          Already have an account?
          <button>Sign in</button>
        </p>
      </div>
    </div>
    </div>
  );
};

export default LoginSignup;

