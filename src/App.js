import React, { useState } from "react";

const App = () => {
  const [data, setData] = useState({
    user: [],
    password: [],
  });

  const handler = (e) => {
    setData((data) => ({
      ...data,
      [e.target.name]: e.target.value,
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(data);
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
          <center>
            <input
              type="text"
              value={data.user}
              onChange={handler}
              placeholder="username"
              name="user"
            />
            <br />
            <input
              type="password"
              value={data.password}
              onChange={handler}
              placeholder="password"
              name="password"
            />
            <br />
            <button type="submit">Submit</button>
            <br />
            <p>Hi {data.user}</p>
          </center>
        </div>
      </form>
    </div>
  );
};

export default App;
