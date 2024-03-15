import React, { useState, useEffect } from "react";
const App = () => {
  const [count, setCount] = useState(0);
  // useEffect(() => console.log("clicked"), []);
  //Use effect with no dependency
  useEffect(() => console.log(count), [count]);
  // Use effect with dependency
  return (
    // <div>
    //   <h2>You clicked {count} times</h2>
    //   <button onClick={() => setCount(count + 1)}>Click Here</button>
    // </div>
    // counter using useState
    <div>
      <h2>You clicked {count} times</h2>
      <button onClick={() => setCount(count + 1)}>Click Here</button>
    </div>
    //Useeffect is always called after return statement once if there is no dependency
    //here there are no dependency so only once it is executed
    //when there is dependency it is called everytime count changes
  );
};

export default App;
