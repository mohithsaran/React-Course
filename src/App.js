import React, { useState, useEffect } from "react";
// import LoginForm from "./LoginForm";
// import Signup from "./SignupForm";
// import Calculator from "./Calculator";

const App = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);
  return (
    <div>
      <center>
        {/* <div className="Signup">
          <Signup />
        </div>
        <div className="LoginForm">
          <LoginForm />
        </div> */}
        {/* <Calculator /> */}
        {data.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </center>
    </div>
  );
};

export default App;
