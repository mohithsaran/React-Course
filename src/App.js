import React from "react";
const App = () => {
  const arr1 = ["React", "Vue", "Angular", "Svelte"];
  const arr2 = [
    {
      id: 1,
      title: "React",
    },
    {
      id: 2,
      title: "Vue",
    },
    {
      id: 3,
      title: "Angular",
    },
    {
      id: 4,
      title: "Svelte",
    },
  ];
  return (
    <div>
      {arr1.map((value, index) => (
        <li> {value}</li>
      ))}
      <hr />
      <p> From Array of objects</p>
      {arr2.map((value, index) => (
        <li key={value.id}> {value.title}</li>
      ))}
    </div>
  );
};

export default App;
