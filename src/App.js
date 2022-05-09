import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Protected from "./components/Protected";
import Phone from "./components/Phone";
import { UserAuthProvider } from "./context/UserAuthContext";

const App = () => {
  return (
    <>
      <UserAuthProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Home" element={<Protected><Home /></Protected>} />
          <Route path="/Phone" element={<Phone/>} />
        </Routes>
      </UserAuthProvider>
    </>
  );
};

export default App;
