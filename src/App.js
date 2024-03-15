const App = () => {
  const names = ["James", "John", "Paul", "George", "Washington"];
  const filtered = names.filter((name) => name.includes("J"));
  return (
    <div>
      {filtered.map((value) => (
        <h4>Names containing 'J' are: {value}</h4>
      ))}
    </div>
  );
};

export default App;
