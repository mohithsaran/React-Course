import React from "react";
import Test from "./Test";
const App = () => {
  const state = {
    name: "Mohith",
    age: 23,
  };
  return (
    <div>
      <center>
        <h2>Iam from App Component</h2>
        <h3>
          <Test />
        </h3>
      </center>
    </div>
  );
};
// Check Test.js to see how props work
export default App;
