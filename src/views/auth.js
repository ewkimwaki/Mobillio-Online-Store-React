import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FaSpinner } from "react-icons/fa";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./auth.css";
import { jwtDecode } from "jwt-decode";


const API_BASE_URL = "https://your-backend-api-url"; // Replace with your actual API URL

const Loader = () => (
  <div className="loader-container">
    <FaSpinner className="loader-spinner" />
  </div>
);

const Auth = () => {
  const navigate = useNavigate();
  const [isSignUp, setIsSignUp] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSignUpClick = () => {
    setIsSignUp(true);
  };

  const handleSignInClick = () => {
    setIsSignUp(false);
  };

  const signUpSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email address").required("Email is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required"),
  });

  const signInSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email address").required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const signUpFormik = useFormik({
    initialValues: { name: "", email: "", password: "" },
    validationSchema: signUpSchema,
    onSubmit: async (values) => {
      setIsLoading(true);
      try {
        const response = await fetch("https://sendit-backend-qhth.onrender.com/signup", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            username: values.name,
            email: values.email,
            password: values.password,
            is_admin: false,
          }),
        });
        const data = await response.json();
        setIsLoading(false);

        if (response.ok) {
          alert("Sign up successful");
          navigate("/"); 
        } else if (response.status === 400 || response.status === 409) {
          setIsSignUp(false);
          throw new Error(data.message || "User already exists. Please Log in");
        } else {
          throw new Error(data.message || `Sign up failed with status ${response.status}`);
        }
      } catch (error) {
        setIsLoading(false);
        alert(error.message);
      }
      signUpFormik.resetForm();
    },
  });

  const signInFormik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: signInSchema,
    onSubmit: async (values) => {
      setIsLoading(true);
      try {
        const response = await fetch("https://sendit-backend-qhth.onrender.com/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: values.email,
            password: values.password,
          }),
        });
        const data = await response.json();
        setIsLoading(false);

        if (data.token) {
          localStorage.setItem("token", data.token);
          const accessToken = jwtDecode(data.token);
          navigate(accessToken.sub.is_admin ? "/admin_dashboard" : "/user-dashboard"); 
        } else {
          throw new Error(data.message || "Login failed");
        }
      } catch (error) {
        setIsLoading(false);
        alert(error.message);
      }
    },
  });

  return (
    <div className="signup-wrapper">
    <div className={`container ${isSignUp ? "active" : ""}`} id="container">
      <div className={`form-container sign-up ${isSignUp ? "active" : ""}`}>
        <form onSubmit={signUpFormik.handleSubmit}>
          <img
            className="image"
            src="/images/nexin-vector-logo.svg" alt="logo"
          />
          <h1>Create Account</h1>
          <h5>Use your email for registration</h5>
          <input
            type="text"
            placeholder="Name"
            id="name"
            name="name"
            onChange={signUpFormik.handleChange}
            value={signUpFormik.values.name}
          />
          {signUpFormik.errors.name && (
            <div className="error-message">{signUpFormik.errors.name}</div>
          )}
          <input
            type="email"
            placeholder="Email"
            id="email"
            name="email"
            onChange={signUpFormik.handleChange}
            value={signUpFormik.values.email}
          />
          {signUpFormik.errors.email && (
            <div className="error-message">{signUpFormik.errors.email}</div>
          )}
          <input
            type="password"
            placeholder="Password"
            id="password"
            name="password"
            onChange={signUpFormik.handleChange}
            value={signUpFormik.values.password}
          />
          {signUpFormik.errors.password && (
            <div className="error-message">{signUpFormik.errors.password}</div>
          )}
          <button className="signup" type="submit" disabled={isLoading}>
            {isLoading ? <Loader /> : "Sign Up"}
          </button>
        </form>
      </div>
      <div className={`form-container sign-in ${isSignUp ? "" : "active"}`}>
        <form onSubmit={signInFormik.handleSubmit}>
        <img className="image" src="/images/nexin-vector-logo.svg" alt="logo" />

          <h1>Sign In</h1>
          <h5>Enter your Email and Password</h5>
          <input
            type="email"
            placeholder="Email"
            id="email"
            name="email"
            onChange={signInFormik.handleChange}
            value={signInFormik.values.email}
          />
          {signInFormik.errors.email && (
            <div className="error-message">{signInFormik.errors.email}</div>
          )}
          <input
            type="password"
            placeholder="Password"
            id="password"
            name="password"
            onChange={signInFormik.handleChange}
            value={signInFormik.values.password}
          />
          {signInFormik.errors.password && (
            <div className="error-message">{signInFormik.errors.password}</div>
          )}
          <Link to="/reset-password" className="reset">
            Forgot Your password?
          </Link>
          <button className="signup" type="submit" disabled={isLoading}>
            {isLoading ? <Loader /> : "Sign In"}
          </button>
        </form>
      </div>
      <div className="toggle-container">
        <div className="toggle">
          <div className="toggle-panel toggle-left">
            <h1>Welcome Back!</h1>
            <p>Enter your personal details to use all of site features</p>
            <button className="hidden" onClick={handleSignInClick}>
              Sign In
            </button>
          </div>
          <div className="toggle-panel toggle-right">
            <h1>Hello, Friend!</h1>
            <p>Register with your personal details to use all of site features</p>
            <button className="hidden" onClick={handleSignUpClick}>
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Auth;

