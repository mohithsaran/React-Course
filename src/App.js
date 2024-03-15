import React, { useState } from "react";
import LoginForm from "./LoginForm";
import Signup from "./SignupForm";

const App = () => {
  return (
    <div>
      <center>
        <Signup />
        <LoginForm />
      </center>
    </div>
  );
};

export default App;
