import React, { useState } from "react";
import GoogleButton from "react-google-button";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/UserAuthContext";

const Login = () => {
  const [error, seterror] = useState("");
  const [state, updatestate] = useState({
    emailInput: "",
    passwordInput: "",
  });

  const handleInputChange = (e) => {
    let valueinput = e.target.value;
    let valuename = e.target.name;

    updatestate((old) => {
      return {
        ...old,
        [valuename]: valueinput,
      };
    });
  };

  const { signin, googlesignin } = UserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    seterror("");
    try {
      await signin(state.emailInput, state.passwordInput);
      navigate("/Home");
    } catch (err) {
      seterror(err.message);
    }
  };

  const handlegoogle = async (e) => {
    e.preventDefault();
    seterror("");
    try {
      await googlesignin();
      navigate("/Home");
    } catch (err) {
      seterror(err.message);
    }
  };

  return (
    <>
      <section className="vh-100">
        <div className="container py-5 h-100">
          <div className="row d-flex align-items-center justify-content-center h-100">
            <div className="col-md-8 col-lg-7 col-xl-6">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                className="img-fluid"
                alt="Phone image"
              />
            </div>
            <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
              {error && <h5 style={{ color: "red" }}>{error}</h5>}
              <form onSubmit={handleSubmit}>
                <div className="form-outline mb-4">
                  <input
                    type="email"
                    id="emailsignin"
                    className="form-control form-control-lg"
                    name="emailInput"
                    onChange={handleInputChange}
                    value={state.emailInput}
                  />
                  <label className="form-label" for="emailsignin">
                    Email address
                  </label>
                </div>

                <div className="form-outline mb-4">
                  <input
                    type="password"
                    id="passwordsignin"
                    className="form-control form-control-lg"
                    name="passwordInput"
                    onChange={handleInputChange}
                    value={state.passwordInput}
                  />
                  <label className="form-label" for="passwordsignin">
                    Password
                  </label>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary btn-lg btn-block w-100"
                >
                  SIGN IN
                </button>
              </form>

              <div className="divider d-flex align-items-center my-4">
                <p className="text-center fw-bold mx-3 mb-0 text-muted">OR</p>
              </div>
              <GoogleButton style={{ width: "100%" }} onClick={handlegoogle} />
              <div className="divider d-flex align-items-center my-4">
                <p className="text-center fw-bold mx-3 mb-0 text-muted">OR</p>
              </div>
              <Link className="btn btn-primary w-100" to="/Phone">
                Sign in With Phone Number
              </Link>
              <div className="d-flex mt-3 justify-content-center">
                <p>Don't have an account ? </p> &nbsp;
                <Link to="/Signup">Create Account</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
