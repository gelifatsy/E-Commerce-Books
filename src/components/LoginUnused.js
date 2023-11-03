import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const LogIn = () => {
  const intVal = { username: "", email: "", password: "" };
  const [formValues, setFormValues] = useState(intVal);
  const [formErrors, setFormErrors] = useState({});
  const [submit, setSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setSubmit(true);
  };
  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && submit) {
    }
  }, [formErrors]);

  const validate = (value) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!value.username) {
      errors.username = "Username is Required";
    }
    if (!value.email) {
      errors.email = "Email is Required";
    } else if (!regex.test(value.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!value.password) {
      errors.password = "Password is Required";
    }
    if (!value.password) {
      errors.password = "Password is required";
    } else if (value.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (value.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    }
    return errors;
  };

  return (
    <div className="form-main">
      <form className="form-container" onSubmit={handleSubmit}>
        <h3>Login</h3>
        {/* <div class="form-group">
          <label>Name</label>
          <input
            type="text"
            class="form-control"
            placeholder="Username"
            name="username"
            value={formValues.username}
            onChange={handleChange}
          />
          <small>{formErrors.username}</small>
        </div> */}
        <div class="form-group">
          <label>Email address</label>
          <input
            type="email"
            class="form-control"
            name="email"
            placeholder="Email Address"
            value={formValues.email}
            onChange={handleChange}
          />
          <small>{formErrors.email}</small>
        </div>
        <div class="form-group">
          <label>Password</label>
          <input
            type="password"
            class="form-control"
            name="password"
            placeholder="Password"
            value={formValues.password}
            onChange={handleChange}
          />
          <small>{formErrors.password}</small>
        </div>
        <div class="form-group form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" class="btn btn-primary">
          Login
        </button>
        <div className="create-account">
          <Link>
            <br />
            Don't have account yet? create account now{" "}
          </Link>
        </div>
      </form>
    </div>
  );
};

export default LogIn;
