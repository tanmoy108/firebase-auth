import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { UserAuth } from "../context/UserAuthContext";

const Signup = () => {
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

  const { create } = UserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    seterror("");
    try {
      await create(state.emailInput, state.passwordInput);
      navigate("/");
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
                    id="emailsignup"
                    className="form-control form-control-lg"
                    name="emailInput"
                    onChange={handleInputChange}
                    value={state.emailInput}
                  />
                  <label className="form-label" for="emailsignup">
                    Email address
                  </label>
                </div>

                <div className="form-outline mb-4">
                  <input
                    type="password"
                    id="passwordsignup"
                    className="form-control form-control-lg"
                    name="passwordInput"
                    onChange={handleInputChange}
                    value={state.passwordInput}
                  />
                  <label className="form-label" for="passwordsignup">
                    Password
                  </label>
                </div>

                <button
                  type="Submit"
                  className="btn btn-primary btn-lg btn-block w-100"
                >
                  SIGN UP
                </button>
              </form>

              <div className="d-flex mt-3 justify-content-center">
                <p>Have an account ?</p> &nbsp;
                <Link to="/">Sign In</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Signup;
