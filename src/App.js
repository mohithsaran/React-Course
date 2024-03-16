import React, { useState } from "react";
import LoginForm from "./LoginForm";
import Signup from "./SignupForm";

const App = () => {
  return (
    <div>
      <center>
        <div className="Signup">
          <Signup />
        </div>
        <div className="LoginForm">
          <LoginForm />
        </div>
      </center>
    </div>
  );
};

export default App;
