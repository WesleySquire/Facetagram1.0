import React from "react";
import { Link } from "react-router-dom";
import useForm from "./useForm";
import validate from "./validateInfo";
function FormSignup({ submitForm }) {
  const { handleChange, values, handleSubmit, errors } = useForm(
    submitForm,
    validate
  );
  return (
    <div className="form-content-right">
      <div className="form-content-right2">
        <form className="form" onSubmit={handleSubmit}>
          <h2 id="logo">
            Face<span>tagram</span>
          </h2>

          <div className="form-inputs">
            <label htmlFor="username" className="form-label">
              Username:
            </label>
            <input
              id="username"
              type="text"
              name="username"
              className="form-input"
              placeholder="Enter your username" //Grey text inside input
              value={values.username} //This checks whats in the username
              onChange={handleChange} //This changes whats in the username
              //below is errors from validateInfo
            ></input>
          </div>
          <div class="errorMsg">
            {errors.username && <p>{errors.username}</p>}
          </div>
          <div className="form-inputs">
            <label htmlFor="email" className="form-label">
              Email:
            </label>
            <input
              id="email"
              type="email" // Built in react email checker.
              name="email"
              className="form-input"
              placeholder="Enter your email"
              value={values.email}
              onChange={handleChange}
            ></input>
          </div>
          <div class="errorMsg">{errors.email && <p>{errors.email}</p>}</div>
          <div className="form-inputs">
            <label htmlFor="password" className="form-label">
              Password:
            </label>
            <input
              id="password"
              type="password"
              name="password"
              className="form-input"
              placeholder="Enter your password"
              value={values.password}
              onChange={handleChange}
            ></input>
          </div>
          <div class="errorMsg">
            {errors.password && <p>{errors.password}</p>}
          </div>
          <div className="form-inputs" id="pass2Div">
            <label htmlFor="password2" className="form-label" id="pass2Label">
              CONF Pass:
            </label>
            <input
              id="password2"
              type="password"
              name="password2"
              className="form-input"
              placeholder="Confirm your password"
              value={values.password2}
              onChange={handleChange}
            ></input>
          </div>
          <div class="errorMsg">
            {errors.password2 && <p>{errors.password2}</p>}
          </div>
          <button className="form-input-btn" type="submit">
            Sign Up!
          </button>
          <span className="form-input-login">
            Already have an account? <Link to="/">Log In</Link>
          </span>
        </form>
      </div>
    </div>
  );
}

export default FormSignup;
