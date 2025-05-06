import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [showPassword, setShowPassword] = useState(false); // Toggle visibility
  const [passwordError, setPasswordError] = useState("");

  const navigate = useNavigate();

  // Password strength validation
  const validatePassword = (value) => {
    const lengthCheck = value.length >= 8;
    const uppercaseCheck = /[A-Z]/.test(value);
    const lowercaseCheck = /[a-z]/.test(value);
    const symbolCheck = /[^A-Za-z0-9]/.test(value);

    if (!lengthCheck || !uppercaseCheck || !lowercaseCheck || !symbolCheck) {
      setPasswordError("Password must be at least 8 characters long and include uppercase, lowercase, and a symbol.");
    } else {
      setPasswordError("");
    }
  };

  const submit = async (e) => {
    e.preventDefault();

    // Prevent form submission if password is weak
    if (passwordError) {
      setError("Please correct the password requirements.");
      return;
    }

    setLoading("Please wait as we log you In...");
    setError("");
    setSuccess("");

    try {
      const data = new FormData();
      data.append("email", email);
      data.append("password", password);

      const response = await axios.post(
        "https://kimanibenkamotho.pythonanywhere.com/api/signin",
        data
      );

      setLoading("");

      if (response.data.user) {
        localStorage.setItem("user", JSON.stringify(response.data.user));
        navigate("/");
      } else {
        setError(response.data.Message);
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="row justify-content-center mybcgcontainer">
      <div className="col-md-6 card shadow p-4">
        <h2>Sign In</h2>
        <form onSubmit={submit}>
          {loading && <div className="alert alert-info">{loading}</div>}
          {success && <div className="alert alert-success">{success}</div>}
          {error && <div className="alert alert-danger">{error}</div>}

          <input
            type="email"
            placeholder="Enter your email Address Here."
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <br />

          {/* Password input with eye toggle */}
          <div className="input-group">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter the password of the user"
              className="form-control"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                validatePassword(e.target.value);
              }}
              required
            />
            <button
              type="button"
              className="btn btn-outline-secondary"
              onClick={() => setShowPassword(!showPassword)}
              tabIndex={-1}
            >
              {showPassword ? "🙈" : "👁️"}
            </button>
          </div>

          {/* Password strength warning */}
          {password && passwordError && (
            <small className="text-danger">{passwordError}</small>
          )}
          <br />

          <button type="submit" className="btn btn-success">
            Sign In
          </button>
        </form>
      </div>

      <Footer />
    </div>
  );
};

export default Signin;
