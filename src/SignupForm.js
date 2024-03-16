import React, { useState } from "react";

const Signup = () => {
  const [value, setValue] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });

  const changeHandle = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };
  const { name, email, phoneNumber, password, confirmPassword } = value;

  const submitHandler = (e) => {
    e.preventDefault();
    if (name.length <= 5) {
      alert("Name should be atleast 5 characters long");
    } else if (password !== confirmPassword) {
      alert("Passwords do not match");
    } else {
      console.log(value);
    }
  };

  return (
    <div>
      <center>
        <h3>Signup Form</h3>
        <form onSubmit={submitHandler}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={value.name}
              onChange={changeHandle}
            ></input>
          </label>
          <br />
          <label>
            Email:
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={value.email}
              onChange={changeHandle}
            ></input>
          </label>
          <br />
          <label>
            Phone Number:
            <input
              type="tel"
              name="phoneNumber"
              placeholder="Phone Number"
              value={value.phoneNumber}
              onChange={changeHandle}
            ></input>
          </label>
          <br />
          <label>
            Password:
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={value.password}
              onChange={changeHandle}
            ></input>
          </label>
          <br />
          <label>
            Confirm Password:
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={value.confirmPassword}
              onChange={changeHandle}
            ></input>
          </label>
          <br />
          {password !== confirmPassword ? (
            <p style={{ color: "red" }}>Passwords do not match</p>
          ) : null}
          <label>
            <button>Submit</button>
          </label>
        </form>
      </center>
    </div>
  );
};

export default Signup;
