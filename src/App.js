import React, { useState } from "react";
import Test from "./Test";

const App = () => {
  const [data, setData] = useState({
    name: "Mohith",
    age: 21,
    skills: ["HTML ", "CSS ", "JS "],
  });
  const updateSkills = () => {
    setData({ ...data, skills: ["HTML ", "CSS ", "JS ", "REACT"] });
  };
  return (
    <div>
      <center>
        <Test name={data.name} age={data.age} skills={data.skills} />
        <button onClick={updateSkills}>Update Skills</button>
      </center>
    </div>
  );
};

export default App;
