import React, { useState } from "react";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { UserAuth } from "../context/UserAuthContext";
import { useNavigate } from "react-router-dom";

const Phone = () => {
  const [number, setnumber] = useState();//number
  const [error, seterror] = useState(""); //error
  const [otp, setotp] = useState(""); // getotp
  const [flag, setflag] = useState(false); // one form
  const [confirm, setconfirm] = useState(); // confirm
  const navigate = useNavigate();
  const { captcha } = UserAuth();
  const handleotp = async (e) => {
    e.preventDefault();
    if (number === "" && number === undefined)
      return seterror("please input correct number");
    seterror("");
    try {
      const response = await captcha(number);
      console.log(response);
      setconfirm(response);
      setflag(true);
    } catch (err) {
      seterror(err.message);
    }
    console.log(number);
  };

  const enterotp = (e) => {
    setotp(e.target.value);
  };

  const verifyotp = async (e) => {
    e.preventDefault();
    if (otp === "" || otp === null) return;
    try {
      await confirm.confirm(otp);
      navigate("/Home");

    } catch (err) {
      seterror(err.message);
    }
  };
  return (
    <>
      <div className="col-md-7 mt-5 mx-auto col-lg-5 col-xl-5 offset-xl-1">
        <form
          onSubmit={handleotp}
          style={{ display: !flag ? "block" : "none" }}
        >
          <div className="form-outline mb-4">
            {error && <h5 style={{ color: "red" }}>{error}</h5>}
            <PhoneInput
              placeholder="Enter phone number"
              defaultCountry="US"
              value={number}
              onChange={setnumber}
            />
            <div id="recaptcha-container" />
          </div>

          <button
            type="submit"
            className="btn btn-primary btn-lg btn-block w-100"
          >
            Send OTP
          </button>
        </form>

        <form onSubmit={verifyotp} style={{ display: flag ? "block" : "none" }}>
          <div className="form-outline mb-4">
            {error && <h5 style={{ color: "red" }}>{error}</h5>}
            <input
              className="form-control"
              placeholder="Enter your OTP number"
              id="otpnumber"
              onChange={enterotp}
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary btn-lg btn-block w-100"
          >
            Verify OTP
          </button>
        </form>
      </div>
    </>
  );
};

export default Phone;
