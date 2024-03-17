// import { useState } from "react";
// import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Home = () => {
  let navigate = useNavigate();
  return (
    <div>
      <h1>Welcome to Home Page</h1>
      <button onClick={() => navigate("/dashboard")}>Login</button>
    </div>
  );
};

export default Home;
