import React, { useState } from "react";

const App = () => {
  const [data, setData] = useState({
    username: "",
    password: "",
  });
  const { username, password } = data;
  const changeHandle = (e) => {
    setData({ ...data, [e.target.name]: [e.target.value] });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <div>
      <center>
        <form onSubmit={submitHandler}>
          <input
            type="text"
            name="username"
            value={username}
            placeholder="Username"
            onChange={changeHandle}
          />
          <br />
          <input
            type="password"
            name="password"
            value={password}
            placeholder="Password"
            onChange={changeHandle}
          />
          <br />
          <button>Submit</button>
        </form>
      </center>
    </div>
  );
};

export default App;
