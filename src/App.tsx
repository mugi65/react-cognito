import React from "react";
import { Route } from "react-router-dom";
import { Routes } from "react-router";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import Home from "./Home";
import SSO from "./SSO";

function App() {
  return (
    <Routes>
      <Route path={"/"} element={<Home />} />
      <Route path={"/signup"} element={<SignUp />} />
      <Route path={"/signin"} element={<SignIn />} />
      <Route path={"/sso"} element={<SSO />} />
    </Routes>
  );
}

export default App;
