const App = () => {
  const names = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
  const filtered = names.filter((name) => name > 40);
  return (
    <div>
      {filtered.map((value) => (
        <h4>Values greater than 40: {value}</h4>
      ))}
    </div>
  );
};

export default App;
