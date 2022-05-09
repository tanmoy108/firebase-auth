import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../context/UserAuthContext";
const Home = () => {
  const [error, seterror] = useState();
  const { user, signout } = UserAuth();
  const navigate = useNavigate();
  const handlelogout = async (e) => {
    try {
      await signout();
      navigate("/");
    } catch (err) {
      seterror(err.message);
    }
  };
  return (
    <>
      {error && <h5 style={{ color: "red" }}>{error}</h5>}
      <h1>Hi {user.email}</h1>
      <button className="btn btn-primary" onClick={handlelogout}>
        Logout
      </button>
    </>
  );
};

export default Home;
